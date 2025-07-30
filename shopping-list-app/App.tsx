import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment as RelayEnvironment } from "./src/relay/RelayEnvironment";
import MainNavigation from "./src/navigation/rootNavigation";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <SafeAreaProvider>
        <Text>Home</Text>

        <MainNavigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </RelayEnvironmentProvider>
  );
}
