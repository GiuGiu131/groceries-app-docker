/**
 * @generated SignedSource<<79765fc46fda504a0ecd54ff8a51f894>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ShoppingListScreenQuery$variables = Record<PropertyKey, never>;
export type ShoppingListScreenQuery$data = {
  readonly availableItems: ReadonlyArray<{
    readonly category: string | null | undefined;
    readonly id: string;
    readonly name: string;
    readonly price: number | null | undefined;
  }> | null | undefined;
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
export type ShoppingListScreenQuery = {
  response: ShoppingListScreenQuery$data;
  variables: ShoppingListScreenQuery$variables;
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
v2 = [
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
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "InventoryItem",
    "kind": "LinkedField",
    "name": "availableItems",
    "plural": true,
    "selections": (v1/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListScreenQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShoppingListScreenQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7c97ea9205db0f6bb904aaeb4dd46c8c",
    "id": null,
    "metadata": {},
    "name": "ShoppingListScreenQuery",
    "operationKind": "query",
    "text": "query ShoppingListScreenQuery {\n  shoppingItems {\n    id\n    quantity\n    totalPrice\n    inventoryItem {\n      id\n      name\n      price\n      category\n    }\n  }\n  availableItems {\n    id\n    name\n    price\n    category\n  }\n}\n"
  }
};
})();

(node as any).hash = "c80fd5be7063525daf61a5a448973d5c";

export default node;
