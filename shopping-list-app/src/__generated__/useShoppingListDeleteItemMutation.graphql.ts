/**
 * @generated SignedSource<<aff4c2c73903e38780bc1abded487e90>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useShoppingListDeleteItemMutation$variables = {
  shoppingItemID: string;
};
export type useShoppingListDeleteItemMutation$data = {
  readonly deleteItemFromShoppingList: boolean | null | undefined;
};
export type useShoppingListDeleteItemMutation = {
  response: useShoppingListDeleteItemMutation$data;
  variables: useShoppingListDeleteItemMutation$variables;
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
    "name": "useShoppingListDeleteItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useShoppingListDeleteItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a7e814a62994dbd677c7c71d3183d418",
    "id": null,
    "metadata": {},
    "name": "useShoppingListDeleteItemMutation",
    "operationKind": "mutation",
    "text": "mutation useShoppingListDeleteItemMutation(\n  $shoppingItemID: ID!\n) {\n  deleteItemFromShoppingList(shoppingItemID: $shoppingItemID)\n}\n"
  }
};
})();

(node as any).hash = "41679b5abaf84f0f034492940ea7f04c";

export default node;
