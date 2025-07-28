/**
 * @generated SignedSource<<37ea8f40f079197e1be7bdb8922025a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ShoppingListScreenAddItemMutation$variables = {
  inventoryItemID: string;
  quantity: number;
};
export type ShoppingListScreenAddItemMutation$data = {
  readonly addItemToShoppingList: {
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
export type ShoppingListScreenAddItemMutation = {
  response: ShoppingListScreenAddItemMutation$data;
  variables: ShoppingListScreenAddItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "inventoryItemID"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "quantity"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "inventoryItemID",
        "variableName": "inventoryItemID"
      },
      {
        "kind": "Variable",
        "name": "quantity",
        "variableName": "quantity"
      }
    ],
    "concreteType": "ShoppingItem",
    "kind": "LinkedField",
    "name": "addItemToShoppingList",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListScreenAddItemMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListScreenAddItemMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d81ded04be956e0877be53155b01e290",
    "id": null,
    "metadata": {},
    "name": "ShoppingListScreenAddItemMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListScreenAddItemMutation(\n  $inventoryItemID: ID!\n  $quantity: Int!\n) {\n  addItemToShoppingList(inventoryItemID: $inventoryItemID, quantity: $quantity) {\n    id\n    quantity\n    totalPrice\n    inventoryItem {\n      id\n      name\n      category\n      price\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d2468632115802898e1481225c1ddced";

export default node;
