import React from 'react';
import {  SafeAreaView,ScrollView,StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from './imagePath';
import { useRef } from 'react';
import Searchbar from '../search-bar/Searchbar';
import Stories from './Stories';
import CarouselCards from '../cardCarousel/CarouselCards';
import Watchlist from './Watchlist/Watchlist';
import Viewall from '../screens/viewall';
import Profile from '../profile/Profile';
import {useNavigation} from '@react-navigation/native';
import Editprofile from '../profile/EditProfile';
import Faq from '../profile/faq';
import Termsncondition from '../profile/termsncondition';
import Profilephoto from '../profile/profilephoto';
import styles from '../styles/Appbar.style'

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
                   source={imagePath.icHome} /><Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0,
                   }}
                     source={imagePath.icEc} /></>

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
                   source={imagePath.icNews} /><Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0
                   }}
                     source={imagePath.icEc} /></>


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
                   source={imagePath.icStats} /><Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0,
                   }}
                     source={imagePath.icEc} /></>

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
                   source={imagePath.icBookmark} />
                   <Image style={{
                     tintColor: focused ? '#11bbcc' : 'white',
                     bottom: -5,
                     width: focused ? 5:0
                   }}
                     source={imagePath.icEc} />
                 </>

               );
             }
           }} />
           <Tab.Screen name="box" component={Box} options={{
             tabBarIcon: ({ focused }) => {
               return (

                 <><Image style={{
                   bottom: 0,
                   tintColor: focused ? '#11bbcc' : '#a8a8a8'
                 }}
                   source={imagePath.icBox} /><Image style={{
                     width: focused ? 5:0,
                     bottom: -5
                   }}
                     source={imagePath.icEc} /></>


               );
             }
           }} />
         </Tab.Navigator>

       
  );
 
};



export default Appbar