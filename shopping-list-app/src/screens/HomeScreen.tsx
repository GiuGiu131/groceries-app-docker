import React from "react";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    // <SafeAreaView>
    <View style={[GlobalStyles.homeContainer, { flex: 1, paddingTop: insets.top }]}>
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
