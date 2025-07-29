import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment as RelayEnvironment } from "./src/relay/RelayEnvironment";

import MainNavigation from "./src/navigation/rootNavigation";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <SafeAreaProvider>
        <Text>Home</Text>
        <MainNavigation />
      </SafeAreaProvider>
    </RelayEnvironmentProvider>
  );
}
