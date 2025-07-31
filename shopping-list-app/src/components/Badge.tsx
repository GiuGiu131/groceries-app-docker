import React from "react";
import { View, Text } from "react-native";
import { BadgeStyles } from "../styles/GlobalStyles";

const Badge: React.FC<{ count: number }> = ({ count }) => {
  if (count <= 0) return null;
  return (
    <View style={BadgeStyles.badgeContainer}>
      <Text style={BadgeStyles.badgeText}>{count > 99 ? "99+" : count}</Text>
    </View>
  );
};

export default Badge;
