// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./navigation/Routes";



import { LogBox } from 'react-native';
LogBox.ignoreLogs(['componentWillReceiveProps']); // Ignore log notification by message
//LogBox.ignoreAllLogs();
 function App() {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
    
  );

 
    
   };
export default App;
