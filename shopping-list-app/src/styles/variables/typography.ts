import { TextStyle, Platform } from "react-native";

type FontSize = "fontSizeBase" | "fontSizeLg" | "fontSizeSm" | "fontSizeXs";
export const fontSizes: Record<FontSize, TextStyle> = {
  fontSizeBase: { fontSize: 16 },
  fontSizeLg: { fontSize: 20 },
  fontSizeSm: { fontSize: 14 },
  fontSizeXs: { fontSize: 12 }
};

type FontWeight = "fontWeightLight" | "fontWeightNormal" | "fontWeightBold";
export const fontWeights: Record<FontWeight, TextStyle> = {
  fontWeightLight: {
    fontWeight: "300"
  },
  fontWeightNormal: {
    fontWeight: "400"
  },
  fontWeightBold: {
    fontWeight: "700"
  }
};

type LineHeight = "lineHeightBase" | "lineHeightSm" | "lineHeightLg";
export const lineHeights: Record<LineHeight, TextStyle> = {
  lineHeightBase: {
    lineHeight: 24
  },
  lineHeightSm: {
    lineHeight: 20
  },
  lineHeightLg: {
    lineHeight: 28
  }
};

const fontFamilyBase = "Poppins";

export const fontFamilies: Record<string, TextStyle> = {
  fontFamilyBase: {
    fontFamily: fontFamilyBase
  }
};

export const typography = {
  fontSizes,
  fontWeights,
  lineHeights,
  fontFamilies
};
