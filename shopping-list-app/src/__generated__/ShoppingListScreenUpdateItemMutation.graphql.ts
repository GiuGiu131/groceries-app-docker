/**
 * @generated SignedSource<<cb95b7bc56f4519d3149bd2904b0f968>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ShoppingListScreenUpdateItemMutation$variables = {
  quantity: number;
  shoppingItemID: string;
};
export type ShoppingListScreenUpdateItemMutation$data = {
  readonly updateItemFromShoppingList: {
    readonly id: string;
    readonly inventoryItem: {
      readonly category: string | null | undefined;
      readonly id: string;
      readonly name: string;
      readonly price: number | null | undefined;
    };
    readonly quantity: number | null | undefined;
    readonly totalPrice: number | null | undefined;
  } | null | undefined;
};
export type ShoppingListScreenUpdateItemMutation = {
  response: ShoppingListScreenUpdateItemMutation$data;
  variables: ShoppingListScreenUpdateItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "quantity"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "shoppingItemID"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "quantity",
        "variableName": "quantity"
      },
      {
        "kind": "Variable",
        "name": "shoppingItemID",
        "variableName": "shoppingItemID"
      }
    ],
    "concreteType": "ShoppingItem",
    "kind": "LinkedField",
    "name": "updateItemFromShoppingList",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quantity",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "totalPrice",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "InventoryItem",
        "kind": "LinkedField",
        "name": "inventoryItem",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListScreenUpdateItemMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ShoppingListScreenUpdateItemMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ac1a09a6a861e6139c83f07c5fa2ad33",
    "id": null,
    "metadata": {},
    "name": "ShoppingListScreenUpdateItemMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListScreenUpdateItemMutation(\n  $shoppingItemID: ID!\n  $quantity: Int!\n) {\n  updateItemFromShoppingList(shoppingItemID: $shoppingItemID, quantity: $quantity) {\n    id\n    quantity\n    totalPrice\n    inventoryItem {\n      id\n      name\n      category\n      price\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "26887e582a12e83367929e55404149ca";

export default node;
