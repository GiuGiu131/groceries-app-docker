/**
 * @generated SignedSource<<38f214038e4f7693160901abff36b3ea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ShoppingListQuery$variables = Record<PropertyKey, never>;
export type ShoppingListQuery$data = {
  readonly shoppingItems: ReadonlyArray<{
    readonly id: string;
    readonly inventoryItem: {
      readonly category: string | null | undefined;
      readonly id: string;
      readonly name: string;
      readonly price: number | null | undefined;
    };
    readonly quantity: number | null | undefined;
    readonly totalPrice: number | null | undefined;
  }> | null | undefined;
};
export type ShoppingListQuery = {
  response: ShoppingListQuery$data;
  variables: ShoppingListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ShoppingItem",
    "kind": "LinkedField",
    "name": "shoppingItems",
    "plural": true,
    "selections": [
      (v0/*: any*/),
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
          (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShoppingListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4bd7aae04bde3443085753f86d05b99a",
    "id": null,
    "metadata": {},
    "name": "ShoppingListQuery",
    "operationKind": "query",
    "text": "query ShoppingListQuery {\n  shoppingItems {\n    id\n    quantity\n    totalPrice\n    inventoryItem {\n      id\n      name\n      category\n      price\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7be65617d67ab1065c19146d9b7cec2d";

export default node;
