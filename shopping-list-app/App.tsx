import React from "react";
import { SafeAreaView, Text } from "react-native";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment as RelayEnvironment } from "./src/relay/RelayEnvironment";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";
import GlobalStyles from "./src/styles/GlobalStyles";
import MainNavigation from "./src/navigation/rootNavigation";

// import "./src/styles.css";

export default function App() {
  return (
    //  <SafeAreaView>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Text>Home</Text>
      <MainNavigation />
      {/* <ShoppingListScreen /> */}
    </RelayEnvironmentProvider>
    //  </SafeAreaView>
  );
}
