import React from "react";
import { View, ViewStyle, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AccountScreenStyles } from "../styles/GlobalStyles";
import CustomText from "../components/CustomText";
import { colours, sizing } from "../styles/variables";

const options = [{ title: "Account Info" }, { title: "Notifications" }, { title: "Help & Support" }, { title: "Logout", danger: true }];

const profileSection: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: colours.colors.secondaryBgColor,
  padding: sizing.paddings.paddingLg,
  borderRadius: 12,
  marginBottom: sizing.margins.marginXl,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: 4 },
  shadowRadius: 10,
  elevation: 5
};

const AccountScreen: React.FC = () => {
  const handlePress = (option: string) => {
    console.log(`Pressed ${option}`);
  };

  return (
    <View style={AccountScreenStyles.container}>
      <ScrollView contentContainerStyle={AccountScreenStyles.scrollContent}>
        <View style={profileSection} accessible accessibilityLabel="User profile">
          <Image source={{ uri: "https://placekitten.com/g/200/200" }} style={AccountScreenStyles.profileImage} accessibilityLabel="Profile image" />
          <View>
            <CustomText style={AccountScreenStyles.profileName} accessibilityRole="header">
              John Doe
            </CustomText>

            <CustomText style={AccountScreenStyles.profileEmail}>john.doe@example.com</CustomText>
          </View>
        </View>

        {options.map(({ title, danger }, index) => (
          <View key={title}>
            <TouchableOpacity activeOpacity={0.6} style={[AccountScreenStyles.option, danger && AccountScreenStyles.optionDanger]} onPress={() => handlePress(title)} accessibilityRole="button" accessibilityState={{ disabled: false }} accessibilityHint={`Navigates to ${title} screen`}>
              <Text style={[AccountScreenStyles.optionText, danger ? AccountScreenStyles.optionTextDanger : null]}>{title}</Text>
              <Ionicons name="chevron-forward" size={20} color={danger ? "#E53935" : "#617D98"} style={AccountScreenStyles.optionIcon} accessibilityIgnoresInvertColors />
            </TouchableOpacity>

            {index < options.length - 1 && <View style={AccountScreenStyles.divider} />}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AccountScreen;
