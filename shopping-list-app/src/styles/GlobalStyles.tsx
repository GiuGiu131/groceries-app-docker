import { StyleSheet } from "react-native";
import { colours, sizing, typography } from "./variables";
import { paddings } from "./variables/sizing";

export const GlobalStyles = StyleSheet.create({
  homeContainer: { flex: 1, backgroundColor: colours.colors.mainBgColor, paddingTop: 20, fontFamily: typography.fontFamilyBase },
  accountContainer: { flex: 1, backgroundColor: colours.colors.mainBgColor, paddingTop: 20, fontFamily: typography.fontFamilyBase }
});

export const BadgeStyles = StyleSheet.create({
  badgeContainer: {
    position: "absolute",
    right: -8,
    top: -4,
    backgroundColor: "red",
    borderRadius: 8,
    paddingHorizontal: 3.5,
    paddingVertical: 0,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10
  },
  badgeText: {
    color: colours.colors.neutral,
    fontSize: typography.fontSizes.fontSizeXs,
    ...typography.fontWeights.semibold
  }
});

export const ScreenWithHeaderStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colours.colors.mainBgColor },
  content: { flex: 1 }
});

export const CustomHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colours.colors.mainBgColor,
    paddingHorizontal: sizing.paddings.paddingLg,
    paddingVertical: sizing.paddings.paddingMd,
    width: "100%",
    borderBottomColor: colours.colors.primary,
    borderBottomWidth: 2,
    position: "relative"
  },
  safeArea: {
    backgroundColor: colours.colors.mainBgColor
  },
  centerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  backBtn: {
    position: "absolute",
    left: sizing.spacings.spacingMd,
    top: "50%",
    transform: [{ translateY: -12 }], // vertically center back button (24/2)
    zIndex: 10
  },
  title: {
    marginTop: sizing.margins.marginXs,
    fontSize: typography.fontSizes.fontSizeLg,
    fontFamily: typography.fontFamilyBase,
    color: colours.colors.primary,
    ...typography.fontWeights.semibold
  }
});

export const IngredientsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.colors.mainBgColor,
    padding: sizing.paddings.paddingXl
  },
  categoryRow: {
    flexDirection: "row",
    marginBottom: sizing.margins.marginLg,
    flexGrow: 0
  },
  categoryBtn: {
    paddingVertical: sizing.paddings.paddingLg,
    paddingHorizontal: sizing.paddings.paddingMd,
    borderRadius: sizing.borderRadius.borderRadiusBase,
    backgroundColor: colours.colors.contentBgColor,
    marginRight: sizing.margins.marginMd
  },
  categoryBtnActive: { backgroundColor: colours.colors.accent },
  categoryText: { fontSize: typography.fontSizes.fontSizeLg, color: colours.colors.primary },
  categoryTextActive: { color: colours.colors.neutral, ...typography.fontWeights.semibold },
  itemsContainer: {
    paddingHorizontal: sizing.paddings.padding2Xl,
    marginBottom: sizing.margins.marginMd,
    justifyContent: "center"
  },
  itemCardDisabled: {
    backgroundColor: colours.colors.disabled,
    opacity: 0.6
  },

  itemCard: {
    backgroundColor: colours.colors.contentBgColor,
    padding: sizing.paddings.paddingLg,
    borderRadius: sizing.borderRadius.borderRadiusSm,
    marginRight: sizing.margins.marginMd,
    marginBottom: sizing.margins.marginMd,
    alignItems: "center",
    justifyContent: "space-between",
    width: 100,
    height: 110,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  itemCardSelected: { backgroundColor: colours.colors.selected },
  itemText: {
    fontSize: typography.fontSizes.fontSizeBase,
    fontFamily: typography.fontFamilyBase,
    ...typography.fontWeights.semibold,
    paddingTop: sizing.paddings.paddingXs,
    textAlign: "center",
    flexWrap: "wrap",
    maxWidth: "100%",
    lineHeight: typography.lineHeights.xs
  },
  disabledTag: {
    fontSize: typography.fontSizes.fontSizeXs,
    color: "gray",
    marginTop: sizing.margins.marginXs
  },

  addSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: sizing.paddings.paddingXs,
    paddingHorizontal: sizing.paddings.paddingMd,
    backgroundColor: colours.colors.mainBgColor,
    borderTopWidth: 0,
    justifyContent: "center",
    flexShrink: 0
  },
  label: {
    fontSize: typography.fontSizes.fontSizeLg,
    marginRight: sizing.margins.marginBase,
    color: colours.colors.primary,
    ...typography.fontWeights.semibold
  },
  input: {
    borderWidth: 3,
    borderColor: colours.colors.secondaryButtonColor,
    paddingVertical: sizing.paddings.paddingXs,
    paddingHorizontal: sizing.paddings.paddingMd,
    borderRadius: 6,
    width: 50,
    marginRight: sizing.margins.marginMd,
    backgroundColor: colours.colors.neutral,
    height: 36,
    color: colours.colors.primary,
    ...typography.fontWeights.semibold
  },

  addBtn: {
    backgroundColor: colours.colors.mainButtonColor,
    color: colours.colors.neutral,
    paddingVertical: sizing.paddings.paddingMd,
    paddingHorizontal: sizing.paddings.paddingLg,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  addBtnText: { color: colours.colors.neutral, ...typography.fontWeights.semibold, fontSize: typography.fontSizes.fontSizeLg }
});

export const AddSectionContainerStyles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: colours.colors.mainBgColor,
    paddingVertical: sizing.paddings.paddingMd,
    paddingHorizontal: sizing.paddings.paddingXl,
    borderTopWidth: 1,
    borderColor: "#ddd",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6
  }
});

export const SearchBarStyles = StyleSheet.create({
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colours.colors.contentBgColor,
    borderRadius: sizing.borderRadius.borderRadiusBase,
    marginBottom: sizing.margins.marginMd,
    paddingHorizontal: sizing.paddings.paddingMd,
    paddingVertical: sizing.paddings.paddingXs,
    borderWidth: 1,
    borderColor: colours.colors.neutral
  },
  searchIcon: { marginRight: sizing.margins.marginMd },
  searchInput: {
    flex: 1,
    fontSize: typography.fontSizes.fontSizeBase,
    color: colours.colors.primary,
    paddingVertical: sizing.paddings.paddingMd,
    fontFamily: typography.fontFamilyBase
  }
});

export const ShoppingListScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizing.paddings.paddingLg,
    backgroundColor: colours.colors.mainBgColor
  },
  emptyWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyImage: {
    width: 200,
    height: 200,
    marginBottom: sizing.margins.marginLg
  },
  emptyText: {
    fontSize: typography.fontSizes.fontSizeLg,
    color: colours.colors.primary,
    ...typography.fontWeights.semibold
  },
  totalContainer: {
    padding: sizing.paddings.paddingMd,
    borderTopWidth: 1,
    borderColor: "#EEE",
    backgroundColor: colours.colors.mainBgColor,
    alignItems: "center",
    marginVertical: sizing.margins.marginLg,
    borderRadius: sizing.borderRadius.borderRadiusBase
  },
  totalText: {
    fontSize: typography.fontSizes.fontSizeLg,
    ...typography.fontWeights.semibold,
    color: colours.colors.primary
  }
});

export const ShoppingListStyles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colours.colors.contentBgColor,
    padding: sizing.paddings.paddingMd,
    borderRadius: 12,
    marginBottom: sizing.margins.marginXl,
    position: "relative"
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: sizing.margins.marginXs
  },
  itemInfo: { flex: 1 },
  itemName: {
    fontSize: typography.fontSizes.fontSizeBase,
    ...typography.fontWeights.semibold,
    color: colours.colors.primary,
    marginBottom: sizing.margins.marginSm
  },

  qtyPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: sizing.margins.marginSm
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colours.colors.secondaryBgColor,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 4
  },
  qtyBtnWrapper: {
    backgroundColor: colours.colors.tertiaryButtonColor,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  qtyBtn: {
    fontSize: typography.fontSizes.fontSizeBase,
    ...typography.fontWeights.bold,
    color: colours.colors.primary
  },
  qtyText: {
    // fontFamily: typography.fontFamilyBase,
    fontSize: typography.fontSizes.fontSizeBase,
    ...typography.fontWeights.bold,
    color: colours.colors.primary,
    marginHorizontal: sizing.margins.marginBase
  },

  price: {
    fontSize: typography.fontSizes.fontSizeBase,
    color: colours.colors.primary,
    marginLeft: sizing.margins.marginXs
  },

  removeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: colours.colors.secondaryBgColor,
    paddingHorizontal: sizing.paddings.paddingBase,
    paddingVertical: sizing.paddings.paddingXs,
    borderRadius: 6,
    zIndex: 10
  },
  removeText: { color: colours.colors.primary, fontSize: typography.fontSizes.fontSizeBase, ...typography.fontWeights.bold },

  // Overlay styles
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  deletePromptBox: {
    backgroundColor: colours.colors.mainBgColor,
    padding: sizing.paddings.paddingLg,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colours.colors.alert,
    width: "80%",
    alignItems: "center"
  },
  deletePromptText: {
    fontSize: typography.fontSizes.fontSizeBase,
    ...typography.fontWeights.semibold,
    color: colours.colors.primary,
    marginBottom: sizing.margins.marginXs,
    textAlign: "center"
  },
  promptButtons: { flexDirection: "row", justifyContent: "space-around", width: "100%" },
  promptBtnConfirm: {
    backgroundColor: colours.colors.danger,
    paddingVertical: sizing.paddings.paddingSm,
    paddingHorizontal: sizing.paddings.paddingLg,
    borderRadius: 6
  },
  promptBtnCancel: {
    backgroundColor: colours.colors.tertiaryButtonColor,
    paddingVertical: sizing.paddings.paddingSm,
    paddingHorizontal: sizing.paddings.paddingLg,
    borderRadius: 6
  },
  promptBtnText: {
    color: colours.colors.primary,
    ...typography.fontWeights.bold
  }
});
export const TotalSectionStyles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    backgroundColor: colours.colors.mainBgColor,
    paddingVertical: sizing.paddings.paddingMd,
    paddingHorizontal: sizing.paddings.paddingXl,
    borderTopWidth: 1,
    borderColor: "#ddd",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  label: {
    fontSize: typography.fontSizes.fontSizeLg,
    color: colours.colors.primary,
    ...typography.fontWeights.semibold
  },
  totalValue: {
    fontSize: typography.fontSizes.fontSizeLg,
    color: colours.colors.primary,
    ...typography.fontWeights.bold
  }
});
