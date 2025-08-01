import React from "react";
import { Text, TextProps, StyleProp, TextStyle } from "react-native";
import { typography } from "../styles/variables";

interface CustomTextProps extends TextProps {
  style?: StyleProp<TextStyle>;
}

const CustomText: React.FC<CustomTextProps> = ({ style, children, ...rest }) => {
  return (
    <Text {...rest} style={[{ fontFamily: typography.fontFamilyBase }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
