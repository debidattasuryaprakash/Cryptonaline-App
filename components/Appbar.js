import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/Appbar.style';
import HomeScreen from '../screens/Homescreen';
import News from '../screens/News';
import Bookmark from '../screens/Bookmark';
import Portfolio from '../screens/Portfolio';
import Stats from '../screens/Stats';

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
                <Image
                  style={{
                    bottom: 0,
                    tintColor: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                  source={require('../assets/navIcons/home.png')}
                />
                <Image
                  style={{
                    tintColor: focused ? '#11bbcc' : 'white',
                    bottom: -5,
                    width: focused ? 5 : 0,
                  }}
                  source={require('../assets/navIcons/Ellipse.png')}
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
                <Image
                  style={{
                    bottom: 0,
                    tintColor: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                  source={require('../assets/navIcons/news.png')}
                />
                <Image
                  style={{
                    tintColor: focused ? '#11bbcc' : 'white',
                    bottom: -5,
                    width: focused ? 5 : 0,
                  }}
                  source={require('../assets/navIcons/Ellipse.png')}
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
                <Image
                  style={{
                    bottom: 0,
                    tintColor: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                  source={require('../assets/navIcons/stats.png')}
                />
                <Image
                  style={{
                    tintColor: focused ? '#11bbcc' : 'white',
                    bottom: -5,
                    width: focused ? 5 : 0,
                  }}
                  source={require('../assets/navIcons/Ellipse.png')}
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
                <Image
                  style={{
                    bottom: 0,
                    tintColor: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                  source={require('../assets/navIcons/bookmark.png')}
                />
                <Image
                  style={{
                    tintColor: focused ? '#11bbcc' : 'white',
                    bottom: -5,
                    width: focused ? 5 : 0,
                  }}
                  source={require('../assets/navIcons/Ellipse.png')}
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
                <Image
                  style={{
                    bottom: 0,
                    tintColor: focused ? '#11bbcc' : '#a8a8a8',
                  }}
                  source={require('../assets/navIcons/portfolio.png')}
                />
                <Image
                  style={{
                    width: focused ? 5 : 0,
                    bottom: -5,
                  }}
                  source={require('../assets/navIcons/Ellipse.png')}
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
import React from 'react';
import {  Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/Appbar.style'
import HomeScreen from '../screens/homescreen';
import News from '../screens/News';
import Bookmark from '../screens/Bookmark';
import Portfolio from '../screens/Portfolio';
import Stats from '../screens/Stats'

const Appbar = () => {
const Tab = createBottomTabNavigator();
return (
     <Tab.Navigator initialRouteName="Home" screenOptions={{
           headerShown: false,
           tabBarShowLabel: false,
           activeTintColor: '#11bcbc',
           inactiveTintColor: '#a8a8a8',
           tabBarHideOnKeyboard: true,
           tabBarStyle: styles.tabbarstyle
         }}>
           <Tab.Screen name="Home" component={HomeScreen} options={{
             tabBarIcon: ({ focused }) => {
               return (

                 <><Image style={{
                   bottom: 0,
                   tintColor: focused ? '#11bbcc' : '#a8a8a8'
                 }}
                   source={require("../assets/navIcons/home.png")} /><Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0,
                   }}
                     source={require("../assets/navIcons/Ellipse.png")} /></>

               );
             }
           }} />
           <Tab.Screen name="news" component={News} options={{
             tabBarIcon: ({ focused }) => {
               return (

                 <><Image style={{
                   bottom: 0,
                   tintColor: focused ? '#11bbcc' : '#a8a8a8'
                 }}
                   source={require("../assets/navIcons/news.png")} /><Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0
                   }}
                     source={require("../assets/navIcons/Ellipse.png")} /></>


               );

             }
           }} />
           <Tab.Screen name="stats" component={Stats} options={{
             tabBarIcon: ({ focused }) => {
               return (

                 <><Image style={{
                   bottom: 0,
                   tintColor: focused ? '#11bbcc' : '#a8a8a8'
                 }}
                   source={require("../assets/navIcons/stats.png")} /><Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0,
                   }}
                     source={require("../assets/navIcons/Ellipse.png")} /></>

               );
             }
           }} />
           <Tab.Screen name="bookmark" component={Bookmark} options={{
             tabBarIcon: ({ focused }) => {
               return (

                 <><Image style={{
                   bottom: 0,
                   tintColor: focused ? '#11bbcc' : '#a8a8a8'
                 }}
                   source={require("../assets/navIcons/bookmark.png")} />
                   <Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0
                   }}
                     source={require("../assets/navIcons/Ellipse.png")} />
                 </>

               );
             }
           }} />
           <Tab.Screen name="Portfolio" component={Portfolio} options={{
             tabBarIcon: ({ focused }) => {
               return (

                 <><Image style={{
                   bottom: 0,
                   tintColor: focused ? '#11bbcc' : '#a8a8a8'
                 }}
                   source={require("../assets/navIcons/portfolio.png")} /><Image style={{
                     width: focused ? 5:0,
                     bottom: -5
                   }}
                     source={require("../assets/navIcons/Ellipse.png")} /></>


               );
             }
           }} />
         </Tab.Navigator>

       
  );
 
};



export default Appbar
