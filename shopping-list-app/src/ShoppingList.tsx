import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay/hooks";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ShoppingListQuery } from "./__generated__/ShoppingListQuery.graphql";

const ShoppingListQueryDef = graphql`
  query ShoppingListQuery {
    shoppingItems {
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
`;

export default function ShoppingList() {
  const data = useLazyLoadQuery<ShoppingListQuery>(ShoppingListQueryDef, {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Shopping List (Relay)</Text>
      <FlatList
        data={data.shoppingItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.inventoryItem.name}</Text>
            <Text>Qty: {item.quantity}</Text>
            <Text>Total: ${item.totalPrice.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  item: { fontSize: 18, fontWeight: "600" }
});
