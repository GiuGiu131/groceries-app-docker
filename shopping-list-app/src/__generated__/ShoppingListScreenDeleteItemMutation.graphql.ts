/**
 * @generated SignedSource<<f1479e8dee1340baee813f7a68e7af0a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ShoppingListScreenDeleteItemMutation$variables = {
  shoppingItemID: string;
};
export type ShoppingListScreenDeleteItemMutation$data = {
  readonly deleteItemFromShoppingList: boolean | null | undefined;
};
export type ShoppingListScreenDeleteItemMutation = {
  response: ShoppingListScreenDeleteItemMutation$data;
  variables: ShoppingListScreenDeleteItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "shoppingItemID"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "shoppingItemID",
        "variableName": "shoppingItemID"
      }
    ],
    "kind": "ScalarField",
    "name": "deleteItemFromShoppingList",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListScreenDeleteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListScreenDeleteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bf6262a8e836263050f62721f7478948",
    "id": null,
    "metadata": {},
    "name": "ShoppingListScreenDeleteItemMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListScreenDeleteItemMutation(\n  $shoppingItemID: ID!\n) {\n  deleteItemFromShoppingList(shoppingItemID: $shoppingItemID)\n}\n"
  }
};
})();

(node as any).hash = "9f591a37356f6c12e644b68904b649ce";

export default node;
