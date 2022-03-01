// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./navigation/Routes";
import Viewall from './watchlist/Viewall';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['componentWillReceiveProps']); // Ignore log notification by message
LogBox.ignoreAllLogs();
 function App() {
   
  return (
    <View style={{ flex: 1 }}>
      <Routes />

    </View>
    
    
  );

 
    
   };
export default App;
