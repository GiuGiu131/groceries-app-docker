import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "./bottomNavigation";

const Stack = createStackNavigator();

const LoginStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={BottomNavigation}></Stack.Screen>
      <Stack.Screen name="ShoppingList" component={BottomNavigation} />
      <Stack.Screen name="AccountScreen" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

const MainNavigation: FC = () => {
  return (
    <NavigationContainer>
      <LoginStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
