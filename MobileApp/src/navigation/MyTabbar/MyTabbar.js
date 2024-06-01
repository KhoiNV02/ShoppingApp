import React from 'react';
import {
  Pressable,
  Text,
  View,
} from 'react-native';

import MyTabbarStyle from './MyTabbarStyle';

export const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={MyTabbarStyle.viewContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const activeColor = options.tabBarIconActiveColor;
        const icon = options.tabBarIcon;
        const badge = options.tabBarBadge;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View style={MyTabbarStyle.viewItem} key={index}>
            <View style={MyTabbarStyle.viewIndicator}>
              <View style={MyTabbarStyle.viewSideIndicator}></View>
              <View
                style={[
                  MyTabbarStyle.indicator,
                  {
                    backgroundColor: isFocused ? '#00a6fb' : 'transparent',
                  },
                ]}></View>
              <View style={MyTabbarStyle.viewSideIndicator}></View>
            </View>
            <View style={MyTabbarStyle.viewIconAndTitle}>
              <Pressable
                accessibilityState={isFocused ? {selected: true} : {}}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                <View style={MyTabbarStyle.viewIconAndTitle}>
                  <View>
                    {icon({focused: isFocused})}
                    {badge ? (
                      <View style={MyTabbarStyle.viewBadgeNumber}>
                        <Text style={MyTabbarStyle.textBadgeNumber}>{badge}</Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </View>

                  <Text
                    style={
                      isFocused ? MyTabbarStyle.titleFocused : MyTabbarStyle.titleUnFocused
                    }>
                    {label}
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};

