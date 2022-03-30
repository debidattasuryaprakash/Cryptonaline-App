import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/Appbar.style';
import HomeScreen from '../screens/homescreen';
import News from '../screens/news';
import Bookmark from '../screens/bookmark';
import Portfolio from '../screens/portfolio';
import Stats from '../screens/stats';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Appbar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        activeTintColor: '#11bcbc',
        inactiveTintColor: '#a8a8a8',
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabbarstyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name="home-outline"
                  style={{
                    name: focused ? 'home' : 'home-outline',
                    fontSize: 20,
                    color: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                />
                <Ionicons
                  name="radio-button-on-outline"
                  style={{
                    color: focused ? '#11bbcc' : 'white',
                    bottom: -3,
                    width: focused ? 12 : 0,
                  }}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="news"
        component={News}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name="newspaper-outline"
                  style={{
                    name: focused ? 'newspaper' : 'newspaper-outline',
                    fontSize: 20,
                    color: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                />
                <Ionicons
                  name="radio-button-on-outline"
                  style={{
                    color: focused ? '#11bbcc' : 'white',
                    bottom: -3,
                    width: focused ? 12 : 0,
                  }}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="stats"
        component={Stats}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name="stats-chart-outline"
                  style={{
                    name: focused ? 'stats-chart' : 'stats-chart-outline',
                    fontSize: 20,
                    color: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                />
                <Ionicons
                  name="radio-button-on-outline"
                  style={{
                    color: focused ? '#11bbcc' : 'white',
                    bottom: -3,
                    width: focused ? 12 : 0,
                  }}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name="bookmarks-outline"
                  style={{
                    name: focused ? 'bookmarks' : 'bookmarks-outline',
                    fontSize: 20,
                    color: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                />
                <Ionicons
                  name="radio-button-on-outline"
                  style={{
                    color: focused ? '#11bbcc' : 'white',
                    bottom: -3,
                    width: focused ? 12 : 0,
                  }}
                />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <>
                <Ionicons
                  name="briefcase-outline"
                  style={{
                    name: focused ? 'briefcase' : 'briefcase-outline',
                    fontSize: 20,
                    color: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                />
                <Ionicons
                  name="radio-button-on-outline"
                  style={{
                    color: focused ? '#11bbcc' : 'white',
                    bottom: -3,
                    width: focused ? 12 : 0,
                  }}
                />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Appbar;
