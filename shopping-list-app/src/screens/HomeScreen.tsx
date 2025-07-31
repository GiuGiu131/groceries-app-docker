import React, { useState } from "react";
import { View } from "react-native";
import IngredientsList from "../components/ingredients/IngredientsList";
import { useShoppingList } from "../hooks/useShoppingList";

const HomeScreen = () => {
  const { addItem, data: shoppingData } = useShoppingList();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  return (
    <View style={{ flex: 1 }}>
      <IngredientsList selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId} shoppingData={shoppingData} addItem={addItem} />
    </View>
  );
};

export default HomeScreen;
