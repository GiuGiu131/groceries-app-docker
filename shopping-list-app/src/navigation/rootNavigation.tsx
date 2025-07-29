import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import BottomNavigation from "./bottomNavigation";
// import SplashScreen from '../screens/SplashScreen';
// import StackFullScreen from '../screens/StackFullScreen';

const Stack = createStackNavigator();

const LoginStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false
        } as StackNavigationOptions
      }
    >
      {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
      {/* <Stack.Screen name="FullScreen" component={StackFullScreen} /> */}
      <Stack.Screen
        name="HomeScreen"
        component={BottomNavigation}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          gestureEnabled: false
        }}
      ></Stack.Screen>
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
