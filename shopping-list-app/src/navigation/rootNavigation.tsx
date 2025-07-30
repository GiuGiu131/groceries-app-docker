import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { Image } from "react-native";
import BottomNavigation from "./bottomNavigation";
import Logo from "../../assets/logo.svg";

import { colours } from "../styles/variables";

const Stack = createStackNavigator();

const LoginStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: true,
          headerTitle: props => <Logo width={50} height={50} />,
          headerTintColor: colours.colors.mainBgColor,
          headerStyle: {
            backgroundColor: colours.colors.mainBgColor
          },
          headerTitleContainerStyle: {
            backgroundColor: colours.colors.mainBgColor
          }
        } as StackNavigationOptions
      }
    >
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigation}
        options={
          {
            // headerTitle: props => <Logo width={50} height={50} />,
            // headerStyle: {
            //   backgroundColor: colours.colors.mainBgColor
            // }
            // cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter
            // gestureEnabled: false
          }
        }
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
        gestureEnabled: false,
        headerTitleContainerStyle: {
          backgroundColor: "red"
        }
      }}
    >
      <LoginStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
