import React from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment as RelayEnvironment } from "./src/relay/RelayEnvironment";
import MainNavigation from "./src/navigation/rootNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/poppins-latin-600-normal.ttf")
  });

  if (!fontsLoaded) return null;

  const TextAny = Text as any;
  const oldRender = TextAny.render;

  TextAny.render = function (...args: any[]) {
    const origin = oldRender.apply(this, args);
    return React.cloneElement(origin, {
      style: [{ fontFamily: "Poppins" }, origin.props.style]
    });
  };

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
