/**
 * @generated SignedSource<<df73812bef68ee53e88fe1a10f97dca3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useShoppingListAddItemMutation$variables = {
  inventoryItemID: string;
  quantity: number;
};
export type useShoppingListAddItemMutation$data = {
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
export type useShoppingListAddItemMutation = {
  response: useShoppingListAddItemMutation$data;
  variables: useShoppingListAddItemMutation$variables;
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
            "name": "price",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "category",
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
    "name": "useShoppingListAddItemMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useShoppingListAddItemMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "d85630818e9b6189f01fe054d3cf9ac1",
    "id": null,
    "metadata": {},
    "name": "useShoppingListAddItemMutation",
    "operationKind": "mutation",
    "text": "mutation useShoppingListAddItemMutation(\n  $inventoryItemID: ID!\n  $quantity: Int!\n) {\n  addItemToShoppingList(inventoryItemID: $inventoryItemID, quantity: $quantity) {\n    id\n    quantity\n    totalPrice\n    inventoryItem {\n      id\n      name\n      price\n      category\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c2e9f7bf1538cc44eb01ea604b859f1d";

export default node;
