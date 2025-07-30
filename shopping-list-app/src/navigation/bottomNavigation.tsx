import { Platform, View, StyleSheet } from "react-native";
import React, { FC } from "react";

import { BottomTabBar, createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen";

import HomeIcon from "../../assets/svgs/home-menu-icon.svg";
import AccountIcon from "../../assets/svgs/account-menu-item.svg";
import ShoppingListIcon from "../../assets/svgs/shopping-list-menu-icon.svg";
import HomeIconActive from "../../assets/svgs/home-menu-icon-active.svg";
import AccountIconActive from "../../assets/svgs/account-menu-item-active.svg";
import ShoppingListIconActive from "../../assets/svgs/shopping-list-menu-icon-active.svg";

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
        // tabBarActiveTintColor: "#000000",
        // tabBarInactiveTintColor: "#767676",
        tabBarStyle: {
          backgroundColor: "#FCF7EB",
          //   borderTopWidth: 0,
          //   elevation: 0,
          paddingTop: 10
          //   height: Platform.OS === "android" ? 65 : undefined
        }
        // tabBarLabelStyle: {
        //   fontFamily: "Arial",
        //   fontSize: 11
        // }
      }}
    >
      <BottomTabNavigator.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return focused ? <HomeIconActive width={WIDTH} height={HEIGHT} /> : <HomeIcon width={WIDTH} height={HEIGHT} />;
          }
        }}
        name="Ingredients"
        listeners={tabBarListeners}
        component={HomeScreen}
      />
      <BottomTabNavigator.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return focused ? <ShoppingListIconActive width={WIDTH} height={HEIGHT} /> : <ShoppingListIcon width={WIDTH} height={HEIGHT} />;
          }
        }}
        name="Shopping List"
        listeners={tabBarListeners}
        component={ShoppingListScreen}
      />

      <BottomTabNavigator.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return focused ? <AccountIconActive width={WIDTH} height={HEIGHT} /> : <AccountIcon width={WIDTH} height={HEIGHT} />;
          }
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
