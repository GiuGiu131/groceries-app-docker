// screens/ShoppingListScreen.tsx
import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { useShoppingList } from "../hooks/useShoppingList";
import ShoppingListItem from "../components/shopping/ShoppingListItem";
import EmptyListBg from "../../assets/empty-shopping-list-bg.png";
import AnimatedItem from "../components/AnimatedItem";
import PriceText from "../components/PriceText";
import { TotalSectionStyles, ShoppingListScreenStyles } from "../styles/GlobalStyles";

type ShoppingItem = {
  id: string;
  quantity?: number;
  inventoryItem: {
    price?: number;
  };
};

const ShoppingListScreen = () => {
  const { data, updateItem, deleteItem } = useShoppingList();

  if (!data || !data.shoppingItems) {
    return <Text>Loading...</Text>;
  }

  const totalPrice = data.shoppingItems.reduce((sum: number, item: ShoppingItem) => {
    const quantity = item.quantity ?? 1;
    const price = item.inventoryItem.price ?? 0;
    return sum + price * quantity;
  }, 0);

  return (
    <View style={ShoppingListScreenStyles.container}>
      {!data.shoppingItems.length ? (
        <View style={ShoppingListScreenStyles.emptyWrapper}>
          <Text style={ShoppingListScreenStyles.emptyText}>Your shopping list is empty!</Text>
          <ImageBackground source={EmptyListBg} style={ShoppingListScreenStyles.emptyImage} resizeMode="contain" />
        </View>
      ) : (
        <>
          <FlatList
            data={data.shoppingItems}
            contentContainerStyle={{ paddingTop: 50 }}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item, index }) => (
              <AnimatedItem delay={index * 100}>
                <ShoppingListItem item={item} updateItem={updateItem} deleteItem={deleteItem} />
              </AnimatedItem>
            )}
          />

          <View style={TotalSectionStyles.container}>
            <Text style={TotalSectionStyles.label}>Total:</Text>
            <Text style={TotalSectionStyles.totalValue}>
              Total: <PriceText amount={totalPrice} />
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ShoppingListScreen;
