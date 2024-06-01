import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react';

import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AppTabsNavigatorStyle from './AppTabsNavigatorStyle';
import MyShopScreen from '../../modules/MyShop/components/MyShop/MyShop';
import HomeScreen from '../../modules/Home/components/HomeScreen/Home';
import UserScreen from '../../modules/User/components/User/User';
import {MyTabBar} from '../MyTabbar/MyTabbar';
import CartScreen from '../../modules/Cart/components/CartScreen/CartScreen';
import i18n from '../../common/utils/multiLanguages/multilanguages';

const BottomTab = createBottomTabNavigator();

export default function AppTabsNavigator() {
  i18n.locale = useSelector(state => state.language.language);
  const cartItemCount = useSelector(state => state.cartItem.cartItemCount);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  useEffect(() => {
    setCartItemQuantity(cartItemCount);
  }, [cartItemCount]);

  return (
    <BottomTab.Navigator
      initialRouteName={'home'}
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerTitleStyle: AppTabsNavigatorStyle.title,
      }}>
      <BottomTab.Screen
        name={'home'}
        component={HomeScreen}
        options={{
          title: i18n.t('Shopping'),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/shopping-bag.png')}></Image>
              );
            } else {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/shopping-bag-outline.png')}></Image>
              );
            }
          },

          headerShown: true,
        }}
      />

      <BottomTab.Screen
        name="myshop"
        component={MyShopScreen}
        options={{
          title: i18n.t('MyShop'),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/house.png')}></Image>
              );
            } else {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/house-outline.png')}></Image>
              );
            }
          },
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: true,
          title: i18n.t('Cart'),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/cart.png')}></Image>
              );
            } else {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/cart-outline.png')}></Image>
              );
            }
          },
          tabBarBadge: cartItemQuantity,
          headerRight: () => (
            <View style={AppTabsNavigatorStyle.badgeNumberRight}>
              <Text style={AppTabsNavigatorStyle.textBadgeNumber}>{cartItemCount}</Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          headerShown: true,
          title: i18n.t('Profile'),
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/user.png')}></Image>
              );
            } else {
              return (
                <Image
                  style={AppTabsNavigatorStyle.icon}
                  source={require('../../assets/Icon/user-outline.png')}></Image>
              );
            }
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
