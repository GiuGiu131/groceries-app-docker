<?php
require_once 'vendor/autoload.php';

use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\Definition\InterfaceType;
use GraphQL\Error\FormattedError;

// Helper functions to encode/decode global IDs
function toGlobalId(string $type, $id): string {
    return base64_encode($type . ':' . $id);
}

function fromGlobalId(string $globalId): array {
    $decoded = base64_decode($globalId);
    return explode(':', $decoded, 2);
}

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// MySQL database connection
$host = 'db';
$dbname = 'shopping_list';
$username = 'root';
$password = 'rootpassword';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    die(json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]));
}

// Node interface definition
$nodeInterface = new InterfaceType([
    'name' => 'Node',
    'fields' => [
        'id' => Type::nonNull(Type::id()),
    ],
    'resolveType' => function ($value) use (&$inventoryItemType, &$shoppingItemType) {
        if (isset($value['name']) && isset($value['price'])) {
            return $inventoryItemType;
        }
        if (isset($value['inventoryItem'])) {
            return $shoppingItemType;
        }
        return null;
    }
]);

// InventoryItem type
$inventoryItemType = new ObjectType([
    'name' => 'InventoryItem',
    'interfaces' => [$nodeInterface],
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'name' => Type::nonNull(Type::string()),
        'category' => Type::string(),
        'price' => Type::float(),
    ]
]);

// ShoppingItem type
$shoppingItemType = new ObjectType([
    'name' => 'ShoppingItem',
    'interfaces' => [$nodeInterface],
    'fields' => [
        'id' => Type::nonNull(Type::id()),
        'inventoryItem' => Type::nonNull($inventoryItemType),
        'quantity' => Type::int(),
        'totalPrice' => Type::float(),
    ]
]);

// Helper to fetch and format ShoppingItem by DB id, with global IDs
$returnShoppingItem = function (int $itemId) use ($pdo): array {
    $stmt = $pdo->prepare('
        SELECT s.shopping_item_id, s.inventory_item_id, s.quantity,
               i.name, i.category, i.price
        FROM shopping_items s
        JOIN inventory_items i ON s.inventory_item_id = i.id
        WHERE s.shopping_item_id = ?
    ');
    $stmt->execute([$itemId]);
    $item = $stmt->fetch();

    if (!$item) {
        throw new Exception('Failed to retrieve item');
    }

    $item['id'] = toGlobalId('ShoppingItem', $item['shopping_item_id']);
    $item['totalPrice'] = round((float)($item['price'] * $item['quantity']), 2);
    $item['inventoryItem'] = [
        'id' => toGlobalId('InventoryItem', $item['inventory_item_id']),
        'name' => $item['name'],
        'category' => $item['category'],
        'price' => (float)$item['price']
    ];

    return $item;
};

// Query type
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        'shoppingItems' => [
            'type' => Type::listOf(Type::nonNull($shoppingItemType)),
            'resolve' => function () use ($pdo) {
                $stmt = $pdo->query('
                    SELECT s.shopping_item_id, s.inventory_item_id, s.quantity,
                           i.name, i.category, i.price
                    FROM shopping_items s
                    JOIN inventory_items i ON s.inventory_item_id = i.id
                    ORDER BY s.shopping_item_id DESC
                ');
                $items = $stmt->fetchAll();

                foreach ($items as &$item) {
                    $item['id'] = toGlobalId('ShoppingItem', $item['shopping_item_id']);
                    $item['totalPrice'] = round((float)($item['price'] * $item['quantity']), 2);
                    $item['inventoryItem'] = [
                        'id' => toGlobalId('InventoryItem', $item['inventory_item_id']),
                        'name' => $item['name'],
                        'category' => $item['category'],
                        'price' => (float)$item['price']
                    ];
                }

                return $items;
            }
        ],
        'availableItems' => [
            'type' => Type::listOf(Type::nonNull($inventoryItemType)),
            'resolve' => function () use ($pdo) {
                $stmt = $pdo->query('SELECT * FROM inventory_items ORDER BY category, name');
                $items = $stmt->fetchAll();

                foreach ($items as &$item) {
                    $item['id'] = toGlobalId('InventoryItem', $item['id']);
                    $item['price'] = (float)$item['price'];
                }

                return $items;
            }
        ],
        'node' => [
            'type' => $nodeInterface,
            'args' => [
                'id' => Type::nonNull(Type::id())
            ],
            'resolve' => function ($root, $args) use ($pdo, $returnShoppingItem) {
                list($type, $id) = fromGlobalId($args['id']);
                if ($type === 'InventoryItem') {
                    $stmt = $pdo->prepare('SELECT * FROM inventory_items WHERE id = ?');
                    $stmt->execute([$id]);
                    $item = $stmt->fetch();
                    if (!$item) {
                        return null;
                    }
                    $item['id'] = toGlobalId('InventoryItem', $item['id']);
                    $item['price'] = (float)$item['price'];
                    return $item;
                } elseif ($type === 'ShoppingItem') {
                    try {
                        return $returnShoppingItem($id);
                    } catch (Exception $e) {
                        return null;
                    }
                }
                return null;
            }
        ]
    ]
]);

// Mutation type
$mutationType = new ObjectType([
    'name' => 'Mutation',
    'fields' => [
        'addItemToShoppingList' => [
            'type' => $shoppingItemType,
            'args' => [
                'inventoryItemID' => Type::nonNull(Type::id()),
                'quantity' => Type::nonNull(Type::int()),
            ],
            'resolve' => function ($root, $args) use ($pdo, $returnShoppingItem) {
                try {
                    list($type, $inventoryItemId) = fromGlobalId($args['inventoryItemID']);
                    if ($type !== 'InventoryItem') {
                        throw new Exception("Invalid inventory item ID");
                    }

                    $requestedQuantity = $args['quantity'] ?? 1;

                    // Get inventory item by ID
                    $stmt = $pdo->prepare('SELECT * FROM inventory_items WHERE id = ?');
                    $stmt->execute([$inventoryItemId]);
                    $inventoryItem = $stmt->fetch();

                    if (!$inventoryItem) {
                        throw new Exception("Inventory item with ID $inventoryItemId not found");
                    }

                    // Check if item exists in shopping list
                    $stmt = $pdo->prepare('SELECT shopping_item_id, quantity FROM shopping_items WHERE inventory_item_id = ?');
                    $stmt->execute([$inventoryItemId]);
                    $existingItem = $stmt->fetch();

                    if ($existingItem) {
                        // Item exists - UPDATE (accumulate)
                        $newQuantity = $existingItem['quantity'] + $requestedQuantity;

                        $stmt = $pdo->prepare('UPDATE shopping_items SET quantity = ? WHERE shopping_item_id = ?');
                        $result = $stmt->execute([$newQuantity, $existingItem['shopping_item_id']]);
                        $itemId = $existingItem['shopping_item_id'];
                    } else {
                        // Item doesn't exist - INSERT
                        $stmt = $pdo->prepare('INSERT INTO shopping_items (inventory_item_id, quantity) VALUES (?, ?)');
                        $result = $stmt->execute([
                            $inventoryItemId,
                            $requestedQuantity
                        ]);
                        $itemId = $pdo->lastInsertId();
                    }

                    if (!$result) {
                        throw new Exception('Database operation failed');
                    }

                    return $returnShoppingItem($itemId);
                } catch (Exception $e) {
                    FormattedError::setInternalErrorMessage($e->getMessage());
                    throw $e;
                }
            }
        ],
        'updateItemFromShoppingList' => [
            'type' => $shoppingItemType,
            'args' => [
                'shoppingItemID' => Type::nonNull(Type::id()),
                'quantity' => Type::nonNull(Type::int())
            ],
            'resolve' => function ($root, $args) use ($pdo, $returnShoppingItem) {
                try {
                    list($type, $shoppingItemId) = fromGlobalId($args['shoppingItemID']);
                    if ($type !== 'ShoppingItem') {
                        throw new Exception("Invalid shopping item ID");
                    }

                    $stmt = $pdo->prepare('UPDATE shopping_items SET quantity = ? WHERE shopping_item_id = ?');
                    $result = $stmt->execute([$args['quantity'], $shoppingItemId]);

                    if (!$result) {
                        throw new Exception('Update failed');
                    }

                    return $returnShoppingItem($shoppingItemId);
                } catch (Exception $e) {
                    FormattedError::setInternalErrorMessage($e->getMessage());
                    throw $e;
                }
            }
        ],
        'deleteItemFromShoppingList' => [
            'type' => Type::boolean(),
            'args' => [
                'shoppingItemID' => Type::nonNull(Type::id())
            ],
            'resolve' => function ($root, $args) use ($pdo) {
                try {
                    list($type, $shoppingItemId) = fromGlobalId($args['shoppingItemID']);
                    if ($type !== 'ShoppingItem') {
                        throw new Exception("Invalid shopping item ID");
                    }

                    $stmt = $pdo->prepare('DELETE FROM shopping_items WHERE shopping_item_id = ?');
                    return $stmt->execute([$shoppingItemId]);
                } catch (Exception $e) {
                    FormattedError::setInternalErrorMessage($e->getMessage());
                    throw $e;
                }
            }
        ]
    ]
]);

// Define schema
$schema = new Schema([
    'query' => $queryType,
    'mutation' => $mutationType,
    'types' => [$inventoryItemType, $shoppingItemType]
]);

// Read input
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

$query = $input['query'] ?? null;
$variables = $input['variables'] ?? null;
$operationName = $input['operationName'] ?? null;

try {
    $result = GraphQL::executeQuery(
        $schema,
        $query,
        null,
        null,
        (array)$variables,
        $operationName
    );
    $output = $result->toArray();
} catch (Throwable $e) {
    $output = [
        'errors' => [
            [
                'message' => $e->getMessage()
            ]
        ]
    ];
}

echo json_encode($output);
