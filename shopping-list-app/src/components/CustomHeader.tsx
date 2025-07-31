import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../../assets/logo.svg";
import { colours } from "../styles/variables";
import { CustomHeaderStyles } from "../styles/GlobalStyles";

type CustomHeaderProps = {
  title?: string;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  return (
    <SafeAreaView style={CustomHeaderStyles.safeArea}>
      <View style={CustomHeaderStyles.container}>
        {canGoBack && (
          <TouchableOpacity style={CustomHeaderStyles.backBtn} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={colours.colors.primary} />
          </TouchableOpacity>
        )}
        <View style={CustomHeaderStyles.centerContainer}>
          <Logo width={65} height={65} />
          <Text style={CustomHeaderStyles.title}>{title ?? "App"}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;
