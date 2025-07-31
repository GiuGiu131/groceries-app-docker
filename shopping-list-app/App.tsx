import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment as RelayEnvironment } from "./src/relay/RelayEnvironment";
import MainNavigation from "./src/navigation/rootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/poppins-latin-500-normal.ttf")
  });

  if (!fontsLoaded) return null;

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <SafeAreaProvider>
        <MainNavigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </RelayEnvironmentProvider>
  );
}
