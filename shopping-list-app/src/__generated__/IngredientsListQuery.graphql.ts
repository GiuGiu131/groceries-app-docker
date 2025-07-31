/**
 * @generated SignedSource<<bb51c9123e239469ff80b2b242b7c148>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IngredientsListQuery$variables = Record<PropertyKey, never>;
export type IngredientsListQuery$data = {
  readonly availableItems: ReadonlyArray<{
    readonly category: string | null | undefined;
    readonly id: string;
    readonly name: string;
    readonly price: number | null | undefined;
  }> | null | undefined;
  readonly shoppingItems: ReadonlyArray<{
    readonly id: string;
    readonly inventoryItem: {
      readonly id: string;
    };
  }> | null | undefined;
};
export type IngredientsListQuery = {
  response: IngredientsListQuery$data;
  variables: IngredientsListQuery$variables;
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
    "concreteType": "InventoryItem",
    "kind": "LinkedField",
    "name": "availableItems",
    "plural": true,
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
  },
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
        "concreteType": "InventoryItem",
        "kind": "LinkedField",
        "name": "inventoryItem",
        "plural": false,
        "selections": [
          (v0/*: any*/)
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
    "name": "IngredientsListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "IngredientsListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "41e145eb43632fb1a08c1a985a48ba33",
    "id": null,
    "metadata": {},
    "name": "IngredientsListQuery",
    "operationKind": "query",
    "text": "query IngredientsListQuery {\n  availableItems {\n    id\n    name\n    price\n    category\n  }\n  shoppingItems {\n    id\n    inventoryItem {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b2084d9c0395cdb20043429a9d4a80ec";

export default node;
