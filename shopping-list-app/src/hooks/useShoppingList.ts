import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { useCallback } from "react";
import type { ShoppingListQuery } from "../__generated__/ShoppingListQuery.graphql";
import type { useShoppingListAddItemMutation } from "../__generated__/useShoppingListAddItemMutation.graphql";
import type { useShoppingListUpdateItemMutation } from "../__generated__/useShoppingListUpdateItemMutation.graphql";
import type { useShoppingListDeleteItemMutation } from "../__generated__/useShoppingListDeleteItemMutation.graphql";

export const useShoppingList = () => {
  const data = useLazyLoadQuery<ShoppingListQuery>(
    graphql`
      query useShoppingListQuery {
        shoppingItems {
          id
          quantity
          totalPrice
          inventoryItem {
            id
            name
            price
            category
          }
        }
        availableItems {
          id
          name
          price
          category
        }
      }
    `,
    {}
  );

  const [commitAdd] = useMutation<useShoppingListAddItemMutation>(graphql`
    mutation useShoppingListAddItemMutation($inventoryItemID: ID!, $quantity: Int!) {
      addItemToShoppingList(inventoryItemID: $inventoryItemID, quantity: $quantity) {
        id
        quantity
        totalPrice
        inventoryItem {
          id
          name
          price
          category
        }
      }
    }
  `);

  const addItem = useCallback(
    (inventoryItemID: string, quantity: number) => {
      commitAdd({
        variables: { inventoryItemID, quantity },
        updater: store => {
          const payload = store.getRootField("addItemToShoppingList");
          if (!payload) return;

          const root = store.getRoot();

          const existing = root.getLinkedRecords("shoppingItems") || [];
          root.setLinkedRecords([...existing, payload], "shoppingItems");

          const newInventoryItem = payload.getLinkedRecord("inventoryItem");
          if (newInventoryItem) {
            const availableItems = root.getLinkedRecords("availableItems") || [];
            root.setLinkedRecords(
              availableItems.filter(item => item.getDataID() !== newInventoryItem.getDataID()),
              "availableItems"
            );
          }
        }
      });
    },
    [commitAdd]
  );

  const [commitUpdate] = useMutation<useShoppingListUpdateItemMutation>(graphql`
    mutation useShoppingListUpdateItemMutation($shoppingItemID: ID!, $quantity: Int!) {
      updateItemFromShoppingList(shoppingItemID: $shoppingItemID, quantity: $quantity) {
        id
        quantity
        totalPrice
        inventoryItem {
          id
          name
          price
        }
      }
    }
  `);

  const updateItem = useCallback(
    (shoppingItemID: string, quantity: number) => {
      commitUpdate({ variables: { shoppingItemID, quantity } });
    },
    [commitUpdate]
  );

  const [commitDelete] = useMutation<useShoppingListDeleteItemMutation>(graphql`
    mutation useShoppingListDeleteItemMutation($shoppingItemID: ID!) {
      deleteItemFromShoppingList(shoppingItemID: $shoppingItemID)
    }
  `);

  const deleteItem = useCallback(
    (shoppingItemID: string) => {
      commitDelete({
        variables: { shoppingItemID },
        updater: store => {
          const root = store.getRoot();

          const shoppingItems = root.getLinkedRecords("shoppingItems") || [];
          const deletedShoppingItem = shoppingItems.find(i => i.getDataID() === shoppingItemID);
          if (!deletedShoppingItem) return;

          const inventoryItem = deletedShoppingItem.getLinkedRecord("inventoryItem");
          if (!inventoryItem) return;

          root.setLinkedRecords(
            shoppingItems.filter(i => i.getDataID() !== shoppingItemID),
            "shoppingItems"
          );

          const availableItems = root.getLinkedRecords("availableItems") || [];
          if (!availableItems.find(item => item.getDataID() === inventoryItem.getDataID())) {
            root.setLinkedRecords([...availableItems, inventoryItem], "availableItems");
          }
        }
      });
    },
    [commitDelete]
  );

  return { data, addItem, updateItem, deleteItem };
};
