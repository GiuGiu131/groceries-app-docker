import { Dimensions } from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
type Screen = "width" | "height";
export const screen: Record<Screen, number> = {
  width: screenWidth,
  height: screenHeight
};

type Padding = "paddingXs" | "paddingSm" | "paddingBase" | "paddingMd" | "paddingLg" | "paddingXl" | "padding2Xl" | "padding3Xl";

export const paddings: Record<Padding, number> = {
  paddingXs: 4,
  paddingSm: 8,
  paddingBase: 10,
  paddingMd: 12,
  paddingLg: 16,
  paddingXl: 20,
  padding2Xl: 24,
  padding3Xl: 32
};
type Margin = "marginBase" | "marginSm" | "marginMd" | "marginLg" | "marginXl" | "marginXs";
export const margins: Record<Margin, number> = {
  marginBase: 8,
  marginSm: 5,
  marginMd: 10,
  marginLg: 15,
  marginXl: 20,
  marginXs: 12
};

type BorderRadius = "borderRadiusBase" | "borderRadiusSm" | "borderRadiusLg";
export const borderRadius: Record<BorderRadius, number> = {
  borderRadiusBase: 5,
  borderRadiusSm: 10,
  borderRadiusLg: 20
};

type Spacing = "spacingXs" | "spacingSm" | "spacingBase" | "spacingMd" | "spacingLg" | "spacingXl" | "spacing2Xl" | "spacing3Xl";

export const spacings: Record<Spacing, number> = {
  spacingXs: 4,
  spacingSm: 8,
  spacingBase: 10,
  spacingMd: 12,
  spacingLg: 16,
  spacingXl: 20,
  spacing2Xl: 24,
  spacing3Xl: 32
};

export const sizing = {
  screen,
  paddings,
  margins,
  borderRadius,
  spacings
};
