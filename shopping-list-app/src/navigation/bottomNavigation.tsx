import React, { FC } from "react";
import { View } from "react-native";
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
import { colours, sizing } from "../styles/variables";
import { useShoppingList } from "../hooks/useShoppingList";
import Badge from "../components/Badge";
import ScreenWithHeader from "./ScreenWithHeader";

type ShoppingItem = {
  quantity?: number | null;
};

const BottomNavigation: FC = () => {
  const WIDTH = 25;
  const HEIGHT = 25;

  const BottomTabNavigator = createBottomTabNavigator();
  const { data } = useShoppingList();

  const totalQuantity = data?.shoppingItems?.reduce((sum: number, item: ShoppingItem) => sum + (item.quantity ?? 0), 0) ?? 0;

  return (
    <BottomTabNavigator.Navigator
      tabBar={props => (
        <View>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colours.colors.mainBgColor,
          paddingTop: sizing.paddings.paddingBase,
          borderTopColor: colours.colors.primary,
          borderTopWidth: 2
        },
        animation: "fade"
      }}
    >
      <BottomTabNavigator.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <HomeIconActive width={WIDTH} height={HEIGHT} /> : <HomeIcon width={WIDTH} height={HEIGHT} />)
        }}
      >
        {props => (
          <ScreenWithHeader title="My Ingredients List">
            <HomeScreen {...props} />
          </ScreenWithHeader>
        )}
      </BottomTabNavigator.Screen>

      <BottomTabNavigator.Screen
        name="ShoppingList"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ width: WIDTH, height: HEIGHT }}>
              {focused ? <ShoppingListIconActive width={WIDTH} height={HEIGHT} /> : <ShoppingListIcon width={WIDTH} height={HEIGHT} />}
              <Badge count={totalQuantity} />
            </View>
          )
        }}
      >
        {props => (
          <ScreenWithHeader title="My Shopping">
            <ShoppingListScreen {...props} />
          </ScreenWithHeader>
        )}
      </BottomTabNavigator.Screen>

      <BottomTabNavigator.Screen
        name="Account"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <AccountIconActive width={WIDTH} height={HEIGHT} /> : <AccountIcon width={WIDTH} height={HEIGHT} />)
        }}
      >
        {props => (
          <ScreenWithHeader title="My Profile">
            <AccountScreen {...props} />
          </ScreenWithHeader>
        )}
      </BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};

export default BottomNavigation;
