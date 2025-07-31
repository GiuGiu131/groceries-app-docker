import { TextStyle, Platform } from "react-native";

type FontSize = "fontSizeBase" | "fontSizeLg" | "fontSizeSm" | "fontSizeXs";

export const fontSizes: Record<FontSize, number> = {
  fontSizeBase: 16,
  fontSizeLg: 20,
  fontSizeSm: 14,
  fontSizeXs: 10
};

type FontWeight = "normal" | "bold" | "semibold" | "light" | "medium";
export const fontWeights: Record<FontWeight, TextStyle> = {
  normal: { fontWeight: "400" },
  light: { fontWeight: "300" },
  medium: { fontWeight: "500" },
  semibold: { fontWeight: "600" },
  bold: { fontWeight: "700" }
};

type LineHeight = "base" | "sm" | "xs" | "lg";

export const lineHeights: Record<LineHeight, number> = {
  base: 24,
  xs: 18,
  sm: 20,
  lg: 28
};

export const fontFamilyBase = "Poppins";

export const fontFamilies: Record<string, TextStyle> = {
  fontFamilyBase: {
    fontFamily: fontFamilyBase
  }
};

export const typography = {
  fontFamilyBase,
  fontSizes,
  fontWeights,
  lineHeights,
  fontFamilies
};
