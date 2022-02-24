import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import imagePath from './imagePath';
import { useRef } from 'react';
import Searchbar from '../search-bar/Searchbar';
import DropShadow from "react-native-drop-shadow";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <><View style={{ flex:0.2,flexDirection:'row',justifyContent:'space-evenly' ,alignItems:'center',paddingLeft:0}}>
      <Searchbar />
      <Image style={{borderColor:'#11bbcc',borderWidth:2,borderRadius:50,bottom:-4,height:40,width:40}}
      source={imagePath.icProfile}
      />
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Home Screen</Text>

      </View></>
  );
}
function News() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>News</Text>
    </View>
  );
}
function Stats() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Stats</Text>
    </View>
  );
}
function Bookmark() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bookmark</Text>
    </View>
  );
}
function Box() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Box</Text>
    </View>
  );
}


 function Routes() {
   return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false,
        tabBarShowLabel: false,
        activeTintColor: '#11bcbc',
        inactiveTintColor: '#a8a8a8',
        tabBarHideOnKeyboard: true,
        
        tabBarStyle:{
          alignContent:'center',
          alignItems:'center',
          backgroundColor: "white",
          position:'absolute',
          bottom:0,
          borderBottomLeftRadius:0,
          borderBottomRightRadius:0,
          borderTopLeftRadius:15,
          borderTopRightRadius:15,
          matginHorizontal:20,
          paddingHorizontal:20,
          height:60,
          //borderRadius: 50,
          shadowColor: '#000',
            shadowOffset: {
              width: 50,
              height: 100,
            },
            shadowOpacity: 1,
            shadowRadius: 50.0,

            elevation: 3,
          
        }
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({focused})=>{
            return(
              
              <><Image style={{bottom:0,
                tintColor: focused ? '#11bbcc' : '#a8a8a8'
              }}
                source={imagePath.icHome} /><Image style={{
                  tintColor: focused ? '#11bbcc' : 'white',
                  bottom: -5
                }}
                  source={imagePath.icEc} /></>
              
            )}

          
        }}
        />
        <Tab.Screen name="news" component={News} options={{
          tabBarIcon: ({focused})=>{
            return(
              
              <><Image style={{bottom:0,
                tintColor: focused ? '#11bbcc' : '#a8a8a8'
              }}
                source={imagePath.icNews} /><Image style={{
                  tintColor: focused ? '#11bbcc' : 'white',
                  bottom: -5
                }}
                  source={imagePath.icEc} /></>
              
              
            )
            
          }
          }}
          />
        <Tab.Screen name="stats" component={Stats} options={{
          tabBarIcon: ({focused})=>{
            return(
              
              <><Image style={{bottom:0,
                tintColor: focused ? '#11bbcc' : '#a8a8a8'
              }}
                source={imagePath.icStats} /><Image style={{
                  tintColor: focused ? '#11bbcc' : 'white',
                  bottom: -5
                }}
                  source={imagePath.icEc} /></>
              
            )
          }}} 
          />
        <Tab.Screen name="bookmark" component={Bookmark} options={{
          
          tabBarIcon: ({focused})=>{
            return(
              
              <><Image style={{bottom:0,
                tintColor: focused ? '#11bbcc' : '#a8a8a8'
              }}
                source={imagePath.icBookmark} />
                <Image style={{
                tintColor: focused ? '#11bbcc' : 'white',
                bottom:-5
              }}
                source={imagePath.icEc} />
                </>
              
            )
          }
          
          }}
          />
        <Tab.Screen name="box" component={Box} options={{
          tabBarIcon: ({focused})=>{
            return(
              
              <><Image style={{bottom:0,
                tintColor: focused ? '#11bbcc' : '#a8a8a8'
              }}
                source={imagePath.icBox} /><Image style={{
                  tintColor: focused ? '#11bbcc' : 'white',
                  bottom: -5
                }}
                  source={imagePath.icEc} /></>
              
              
            )
          }}} 
          />
      </Tab.Navigator>

    </NavigationContainer>
  );
}


export default Routes