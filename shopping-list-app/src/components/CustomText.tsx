import React from "react";
import { Text, TextProps } from "react-native";
import { typography } from "../styles/variables";

const CustomText: React.FC<TextProps> = props => {
  return <Text {...props} style={[{ fontFamily: typography.fontFamilyBase }, props.style]} />;
};

export default CustomText;
