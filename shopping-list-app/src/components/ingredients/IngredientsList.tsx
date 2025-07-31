import React, { useState, useEffect } from "react";
import { View, Keyboard, TouchableWithoutFeedback, Animated } from "react-native";
import { useLazyLoadQuery, graphql } from "react-relay";
import { AddSectionContainerStyles, IngredientsListStyles } from "../../styles/GlobalStyles";
import { SearchBar } from "./SearchBar";
import { CategoryList } from "./CategoryList";
import { IngredientsGrid } from "./IngredientsGrid";
import { AddSection } from "./AddSection";
import type { IngredientsListQuery } from "../../__generated__/IngredientsListQuery.graphql";
import type { AvailableItem } from "../../types/ingredients";

type IngredientsListProps = {
  selectedItemId: string | null;
  setSelectedItemId: (id: string | null) => void;
  shoppingData: any;
  addItem: (id: string, qty: number) => void;
};

const IngredientsList: React.FC<IngredientsListProps> = ({ selectedItemId, setSelectedItemId, shoppingData, addItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantity, setQuantity] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const data = useLazyLoadQuery<IngredientsListQuery>(
    graphql`
      query IngredientsListQuery {
        availableItems {
          id
          name
          price
          category
        }
        shoppingItems {
          id
          inventoryItem {
            id
          }
        }
      }
    `,
    {}
  );

  // Group categories
  const categoriesMap = new Map<string, any[]>();
  data.availableItems?.forEach(item => {
    const cat = item.category || "Uncategorized";
    if (!categoriesMap.has(cat)) categoriesMap.set(cat, []);
    categoriesMap.get(cat)!.push(item);
  });

  const categories = Array.from(categoriesMap, ([name, items]) => ({
    id: name,
    name,
    items
  }));

  useEffect(() => {
    if (categories.length && selectedCategory === null) {
      setSelectedCategory(categories[0].id);
      // if (categories[0].items.length) setSelectedItemId(categories[0].items[0].id);
    }
  }, [categories]);

  const items: AvailableItem[] = searchQuery.trim().length > 0 ? (data.availableItems ?? []).filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())) : selectedCategory ? categoriesMap.get(selectedCategory) ?? [] : [];

  const handleAdd = () => {
    if (!selectedItemId) return;
    const qty = parseInt(quantity, 10);
    if (isNaN(qty) || qty <= 0) return;
    addItem(selectedItemId, qty);
    setQuantity("1");
    setSelectedItemId(null);
    Keyboard.dismiss();
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery("");
    setSelectedItemId(null);
  };

  const handleSelectItem = (id: string) => {
    if (selectedItemId === id) {
      setSelectedItemId(null);
    } else {
      setSelectedItemId(id);
    }
  };

  const [keyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", e => {
      Animated.timing(keyboardHeight, {
        toValue: e.endCoordinates.height,
        duration: 250,
        useNativeDriver: false
      }).start();
    });
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(keyboardHeight, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={IngredientsListStyles.container}>
        <SearchBar
          value={searchQuery}
          onChange={text => {
            setSearchQuery(text);
            setSelectedItemId(null);
          }}
        />
        <CategoryList categories={categories} selectedCategory={selectedCategory} onSelect={handleSelectCategory} />

        <IngredientsGrid items={items} selectedItemId={selectedItemId} shoppingItems={shoppingData?.shoppingItems ?? []} onSelect={handleSelectItem} />

        {selectedItemId && (
          <Animated.View style={[AddSectionContainerStyles.container, { bottom: keyboardHeight }]}>
            <AddSection quantity={quantity} setQuantity={setQuantity} onAdd={handleAdd} />
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default IngredientsList;
