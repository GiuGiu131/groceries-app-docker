import React from "react";
import { FlatList } from "react-native";
import type { AvailableItem, ShoppingItem } from "../../types/ingredients";
import IngredientItem from "./IngredientItem";
import { IngredientsListStyles } from "../../styles/GlobalStyles";

type Props = {
  items: (AvailableItem & { isAdded: boolean })[];
  selectedItemId: string | null;
  onSelect: (id: string) => void;
};

export const IngredientsGrid: React.FC<Props> = ({ items, selectedItemId, onSelect }) => (
  <FlatList
    data={items}
    numColumns={3}
    keyExtractor={item => item.id}
    contentContainerStyle={IngredientsListStyles.itemsContainer}
    renderItem={({ item, index }) => {
      const isSelected = selectedItemId === item.id;

      return (
        <IngredientItem
          item={item}
          isSelected={isSelected}
          isInList={item.isAdded} // ✅ now comes directly from items
          onPress={() => onSelect(item.id)}
          delay={index * 100}
        />
      );
    }}
  />
);
