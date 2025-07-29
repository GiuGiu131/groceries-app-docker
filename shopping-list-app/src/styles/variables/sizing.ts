import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
type Screen = "width" | "height";
export const screen: Record<Screen, number> = {
  width: screenWidth,
  height: screenHeight
};

type Padding = "paddingBase" | "paddingSm" | "paddingMd" | "paddingLg";
export const paddings: Record<Padding, number> = {
  paddingBase: 10,
  paddingSm: 5,
  paddingMd: 10,
  paddingLg: 15
};

type Margin = "marginBase" | "marginSm" | "marginMd" | "marginLg";
export const margins: Record<Margin, number> = {
  marginBase: 10,
  marginSm: 5,
  marginMd: 10,
  marginLg: 15
};

type BorderRadius = "borderRadiusBase" | "borderRadiusSm" | "borderRadiusLg";
export const borderRadius: Record<BorderRadius, number> = {
  borderRadiusBase: 5,
  borderRadiusSm: 10,
  borderRadiusLg: 20
};

type Spacing = "spacingBase" | "spacingSm" | "spacingMd" | "spacingLg";
export const spacings: Record<Spacing, number> = {
  spacingBase: 10,
  spacingSm: 5,
  spacingMd: 10,
  spacingLg: 15
};

export const sizing = {
  screen,
  paddings,
  margins,
  borderRadius,
  spacings
};
