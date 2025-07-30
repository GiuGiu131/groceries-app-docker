import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Image } from "react-native";
import BottomNavigation from "./bottomNavigation";
import Logo from "../../assets/logo.svg";

const Stack = createStackNavigator();

const LoginStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: true
        } as StackNavigationOptions
      }
    >
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigation}
        options={{
          headerTitle: props => <Logo width={100} height={100} />,
          headerStyle: {
            backgroundColor: "#FCF7EB"
          }
          // cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
          // gestureEnabled: false
        }}
      ></Stack.Screen>
      <Stack.Screen name="ShoppingList" component={BottomNavigation} />
      <Stack.Screen name="AccountScreen" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

const MainNavigation: FC = () => {
  return (
    <NavigationContainer
      options={{
        gestureEnabled: false
      }}
    >
      <LoginStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
