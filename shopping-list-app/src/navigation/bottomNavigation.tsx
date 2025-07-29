import { Platform, View, StyleSheet } from "react-native";
import React, { FC } from "react";

import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen";

const BottomNavigation: FC = () => {
  const WIDTH: number = 25;
  const HEIGHT: number = 25;

  const BottomTabNavigator = createBottomTabNavigator();

  const tabBarListeners = ({ navigation, route }: { navigation: any; route: any }): { tabPress: () => void } => ({
    tabPress: () => navigation.navigate(route.name)
  });

  return (
    <BottomTabNavigator.Navigator
      tabBar={props => (
        <View style={styles.wrapperStyle}>
          <BottomTabBar {...props} style={styles.bottomTabStyles} />
        </View>
      )}
      screenOptions={{
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#767676",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
          paddingTop: 10,
          height: Platform.OS === "android" ? 65 : undefined
        },
        tabBarLabelStyle: {
          fontFamily: "Arial",
          fontSize: 11
        }
      }}
    >
      <BottomTabNavigator.Screen name="Home" listeners={tabBarListeners} component={HomeScreen} />
      <BottomTabNavigator.Screen name="Shopping List" listeners={tabBarListeners} component={ShoppingListScreen} />

      <BottomTabNavigator.Screen
        options={{
          tabBarShowLabel: true
          // tabBarIcon: ({ color, size }) => {
          //   return <SvgUri width={WIDTH} height={HEIGHT} uri="../../assets/svgs/home-menu-icon.svg" />;
          // }
        }}
        name="Account"
        listeners={tabBarListeners}
        component={AccountScreen}
      />
    </BottomTabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {},
  bottomTabStyles: {}
});

export default BottomNavigation;
