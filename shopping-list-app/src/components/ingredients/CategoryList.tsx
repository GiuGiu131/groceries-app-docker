import React from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import { getIconForCategory } from "../../constants/categoryIcons";
import { IngredientsListStyles } from "../../styles/GlobalStyles";
import { Category } from "../../types/ingredients";

export const CategoryList = ({ categories, selectedCategory, onSelect }: { categories: Category[]; selectedCategory: string | null; onSelect: (id: string) => void }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }} style={IngredientsListStyles.categoryRow}>
    {categories.map(cat => {
      const IconComponent = getIconForCategory(cat.name);
      return (
        <TouchableOpacity key={cat.id} style={[IngredientsListStyles.categoryBtn, selectedCategory === cat.id && IngredientsListStyles.categoryBtnActive]} onPress={() => onSelect(cat.id)}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconComponent width={30} height={30} style={{ marginRight: 6 }} />
            <Text style={[IngredientsListStyles.categoryText, selectedCategory === cat.id && IngredientsListStyles.categoryTextActive]}>{cat.name}</Text>
          </View>
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);
