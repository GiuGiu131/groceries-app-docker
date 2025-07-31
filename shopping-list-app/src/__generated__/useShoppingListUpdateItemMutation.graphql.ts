/**
 * @generated SignedSource<<7ac57a7f954589d49dbaea8c17fd12f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useShoppingListUpdateItemMutation$variables = {
  quantity: number;
  shoppingItemID: string;
};
export type useShoppingListUpdateItemMutation$data = {
  readonly updateItemFromShoppingList: {
    readonly id: string;
    readonly inventoryItem: {
      readonly id: string;
      readonly name: string;
      readonly price: number | null | undefined;
    };
    readonly quantity: number | null | undefined;
    readonly totalPrice: number | null | undefined;
  } | null | undefined;
};
export type useShoppingListUpdateItemMutation = {
  response: useShoppingListUpdateItemMutation$data;
  variables: useShoppingListUpdateItemMutation$variables;
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
    "name": "useShoppingListUpdateItemMutation",
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
    "name": "useShoppingListUpdateItemMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b381531ee6ba6fec088cf0cc2cc22a47",
    "id": null,
    "metadata": {},
    "name": "useShoppingListUpdateItemMutation",
    "operationKind": "mutation",
    "text": "mutation useShoppingListUpdateItemMutation(\n  $shoppingItemID: ID!\n  $quantity: Int!\n) {\n  updateItemFromShoppingList(shoppingItemID: $shoppingItemID, quantity: $quantity) {\n    id\n    quantity\n    totalPrice\n    inventoryItem {\n      id\n      name\n      price\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9a804a41265a666dc9cbbfc414d22f7f";

export default node;
