import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colours } from "../../styles/variables";
import { SearchBarStyles } from "../../styles/GlobalStyles";

export const SearchBar = ({ value, onChange }: { value: string; onChange: (t: string) => void }) => (
  <View style={SearchBarStyles.searchWrapper}>
    <Icon name="search-outline" size={20} color={colours.colors.primary} style={SearchBarStyles.searchIcon} />
    <TextInput style={SearchBarStyles.searchInput} placeholder="Search ingredients..." placeholderTextColor={colours.colors.primary} value={value} onChangeText={onChange} />
  </View>
);
