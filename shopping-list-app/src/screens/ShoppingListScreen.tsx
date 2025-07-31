// screens/ShoppingListScreen.tsx
import React from "react";
import { View, Text, FlatList, ImageBackground, StyleSheet } from "react-native";
import { useShoppingList } from "../hooks/useShoppingList";
import ShoppingListItem from "../components/shopping/ShoppingListItem";
import EmptyListBg from "../../assets/empty-shopping-list-bg.png";
import AnimatedItem from "../components/AnimatedItem";
import PriceText from "../components/PriceText";

const ShoppingListScreen = () => {
  const { data, updateItem, deleteItem } = useShoppingList();

  if (!data || !data.shoppingItems) {
    return <Text>Loading...</Text>;
  }

  const totalPrice = data.shoppingItems.reduce((sum, item) => {
    const quantity = item.quantity ?? 1;
    const price = item.inventoryItem.price ?? 0;
    return sum + price * quantity;
  }, 0);

  return (
    <View style={styles.container}>
      {!data.shoppingItems.length ? (
        <View style={styles.emptyWrapper}>
          <Text style={styles.emptyText}>Your shopping list is empty!</Text>
          <ImageBackground source={EmptyListBg} style={styles.emptyImage} resizeMode="contain" />
        </View>
      ) : (
        <>
          <FlatList
            data={data.shoppingItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => (
              <AnimatedItem delay={index * 100}>
                <ShoppingListItem item={item} updateItem={updateItem} deleteItem={deleteItem} />
              </AnimatedItem>
            )}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: <PriceText amount={totalPrice} />
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ShoppingListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FAF7EF" },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyImage: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  emptyText: {
    fontSize: 18,
    color: "#0D2A4D",
    fontWeight: "600"
  },
  totalContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#EEE",
    backgroundColor: "#FAF7EF",
    alignItems: "center",
    marginVertical: 15,
    borderRadius: 12
  },
  totalText: {
    fontSize: 18,
    fontWeight: "600"
  }
});
