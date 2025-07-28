import React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput, StyleSheet } from "react-native";
import { graphql, useLazyLoadQuery, useMutation } from "react-relay";
import { ShoppingListScreenQuery } from "../__generated__/ShoppingListScreenQuery.graphql";
import { ShoppingListScreenAddItemMutation } from "../__generated__/ShoppingListScreenAddItemMutation.graphql";
import { ShoppingListScreenUpdateItemMutation } from "../__generated__/ShoppingListScreenUpdateItemMutation.graphql";
import { ShoppingListScreenDeleteItemMutation } from "../__generated__/ShoppingListScreenDeleteItemMutation.graphql";

const ShoppingListScreen = () => {
  // Fetch Shopping Items + Available Items
  const data = useLazyLoadQuery<ShoppingListScreenQuery>(
    graphql`
      query ShoppingListScreenQuery {
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
  // Add this early return to avoid errors if availableItems is undefined or null
  if (!data.availableItems) {
    return <Text>Loading available items...</Text>; // or return null if you prefer nothing rendered
  }

  // Mutations
  const [commitAdd] = useMutation<ShoppingListScreenAddItemMutation>(graphql`
    mutation ShoppingListScreenAddItemMutation($inventoryItemID: ID!, $quantity: Int!) {
      addItemToShoppingList(inventoryItemID: $inventoryItemID, quantity: $quantity) {
        id
        quantity
        totalPrice
        inventoryItem {
          id
          name
          category
          price
        }
      }
    }
  `);

  const [commitUpdate] = useMutation<ShoppingListScreenUpdateItemMutation>(graphql`
    mutation ShoppingListScreenUpdateItemMutation($shoppingItemID: ID!, $quantity: Int!) {
      updateItemFromShoppingList(shoppingItemID: $shoppingItemID, quantity: $quantity) {
        id
        quantity
        totalPrice
        inventoryItem {
          id
          name
          category
          price
        }
      }
    }
  `);

  const [commitDelete] = useMutation<ShoppingListScreenDeleteItemMutation>(graphql`
    mutation ShoppingListScreenDeleteItemMutation($shoppingItemID: ID!) {
      deleteItemFromShoppingList(shoppingItemID: $shoppingItemID)
    }
  `);

  // State
  const [selectedItemId, setSelectedItemId] = useState<string | null>(data.availableItems.length > 0 ? data.availableItems[0].id : null);
  const [quantity, setQuantity] = useState("1");

  // Add Item
  const addItem = () => {
    if (!selectedItemId) return;

    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty <= 0) {
      alert("Please enter a valid quantity (1 or more)");
      return;
    }

    commitAdd({
      variables: { inventoryItemID: selectedItemId, quantity: qty },
      updater: store => {
        const payload = store.getRootField("addItemToShoppingList");
        if (!payload) return;

        const root = store.getRoot();
        const existing = root.getLinkedRecords("shoppingItems") || [];
        root.setLinkedRecords([...existing, payload], "shoppingItems");
      },
      onError: err => alert("Error adding item: " + err.message)
    });
  };

  // Update Item
  const updateItem = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    commitUpdate({
      variables: { shoppingItemID: id, quantity: newQuantity },
      updater: store => {
        const updatedItem = store.getRootField("updateItemFromShoppingList");
        if (!updatedItem) return;

        const root = store.getRoot();
        const items = root.getLinkedRecords("shoppingItems") || [];

        const updatedList = items.map(item => (item.getDataID() === updatedItem.getDataID() ? updatedItem : item));

        root.setLinkedRecords(updatedList, "shoppingItems");
      },
      onError: err => alert("Error updating item: " + err.message)
    });
  };

  // Delete Item
  const deleteItem = (id: string) => {
    commitDelete({
      variables: { shoppingItemID: id },
      updater: store => {
        const root = store.getRoot();
        const items = root.getLinkedRecords("shoppingItems") || [];
        root.setLinkedRecords(
          items.filter(i => i.getDataID() !== id),
          "shoppingItems"
        );
      },
      onError: err => alert("Error deleting item: " + err.message)
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>

      {/* Add Item Section */}
      <Text style={styles.subtitle}>Add Item:</Text>
      <View style={styles.availableItemsContainer}>
        {data.availableItems?.map(item => {
          const isInShoppingList = data.shoppingItems?.some(s => s.inventoryItem?.id === item.id);

          return (
            <Button
              key={item.id}
              title={`${item.category} - ${item.name}`}
              onPress={() => !isInShoppingList && setSelectedItemId(item.id)}
              color={isInShoppingList ? "lightgray" : selectedItemId === item.id ? "green" : "gray"}
              disabled={isInShoppingList} // disable if already in shopping list
            />
          );
        })}
      </View>

      <TextInput style={styles.input} placeholder="Quantity" keyboardType="numeric" value={quantity} onChangeText={setQuantity} />
      <Button title="Add to Shopping List" onPress={addItem} />

      {/* Shopping List */}
      <FlatList
        data={data.shoppingItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.inventoryItem.name} - {item.quantity} pcs - ${item.totalPrice?.toFixed(2)}
            </Text>
            <View style={styles.row}>
              <Button title="+" onPress={() => item.quantity != null && updateItem(item.id, item.quantity + 1)} />
              <Button title="-" onPress={() => item.quantity != null && updateItem(item.id, Math.max(1, item.quantity - 1))} />
              <Button title="Delete" color="red" onPress={() => deleteItem(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginTop: 10, marginBottom: 6 },
  availableItemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 12
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 10,
    borderRadius: 4,
    width: 100
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  itemText: { fontSize: 16, marginBottom: 4 },
  row: { flexDirection: "row", justifyContent: "space-around", width: 160 }
});
