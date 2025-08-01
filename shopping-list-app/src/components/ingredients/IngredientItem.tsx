import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { getIconForCategory } from "../../constants/categoryIcons";
import type { AvailableItem } from "../../types/ingredients";
import { IngredientsListStyles } from "../../styles/GlobalStyles";
import { colours } from "../../styles/variables";

type Props = {
  item: AvailableItem;
  isSelected: boolean;
  isInList: boolean; // true if already added
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
      <TouchableOpacity
        onPress={onPress}
        disabled={isInList} // disable click if already added
        activeOpacity={1}
        style={[
          IngredientsListStyles.itemCard,
          isSelected && IngredientsListStyles.itemCardSelected,
          isInList && IngredientsListStyles.itemCardDisabled // ✅ greyed out
        ]}
      >
        <View style={{ alignItems: "center" }}>
          <IconComponent width={32} height={32} />
          <Text style={IngredientsListStyles.itemText}>{item.name}</Text>
          {isInList && (
            <Text
              style={{
                marginTop: 4,
                fontSize: 12,
                fontWeight: "bold",
                color: colours.colors.primary
              }}
            >
              Added
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default IngredientItem;
