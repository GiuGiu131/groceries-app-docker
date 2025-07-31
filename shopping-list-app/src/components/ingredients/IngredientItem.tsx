import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { getIconForCategory } from "../../constants/categoryIcons";
import type { AvailableItem } from "../../types/ingredients";
import { IngredientsListStyles } from "../../styles/GlobalStyles";

type Props = {
  item: AvailableItem;
  isSelected: boolean;
  isInList: boolean;
  onPress: () => void;
  delay?: number;
};

const IngredientItem: React.FC<Props> = ({ item, isSelected, isInList, onPress, delay = 0 }) => {
  const IconComponent = getIconForCategory(item.category);
  const scaleAnim = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 8,
      delay,
      useNativeDriver: true
    }).start();
  }, [delay, scaleAnim]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <TouchableOpacity onPress={onPress} disabled={isInList} activeOpacity={1} style={[IngredientsListStyles.itemCard, isSelected && IngredientsListStyles.itemCardSelected, isInList && IngredientsListStyles.itemCardDisabled]}>
        <View style={{ alignItems: "center" }}>
          <IconComponent width={32} height={32} />
          <Text style={IngredientsListStyles.itemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default IngredientItem;
