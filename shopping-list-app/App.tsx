import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { environment as RelayEnvironment } from "./src/relay/RelayEnvironment";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";

export default function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ShoppingListScreen />
    </RelayEnvironmentProvider>
  );
}
