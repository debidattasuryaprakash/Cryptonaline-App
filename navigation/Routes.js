import React from 'react';
import {  SafeAreaView,ScrollView,StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from './imagePath';
import { useRef } from 'react';
import Searchbar from '../search-bar/Searchbar';
import Stories from '../stories/Stories';
import CarouselCards from '../cardCarousel/CarouselCards';
import Watchlist from '../watchlist/watchhlist';
import Viewall from '../watchlist/Viewall';
import Profile from '../profile/Profile';
import {useNavigation} from '@react-navigation/native';
import Editprofile from '../profile/EditProfile';
import Faq from '../profile/faq';
import Termsncondition from '../profile/termsncondition';
import Profilephoto from '../profile/profilephoto';





function HomeScreen() {
   const navigation = useNavigation();
  const screenHeight = Dimensions.get('window').height;
  return (
    
    <>
      {/* <View style={{flex:1, Height: "auto", maxHeight: screenHeight}}>
        <ScrollView showsVerticalScrollIndicator={false} style={{margin:0}} contentContainerStyle={{flexGrow:1}} >    */}
       
       <View style={{ flexDirection:'row',justifyContent:'space-evenly' ,alignItems:'center',paddingLeft:0,paddingTop:50}}>
      <Searchbar />
      <TouchableOpacity activeOpacity={1} onPress={() =>
                  navigation.push('Profile')}>
      <Image style={{borderColor:'#11bbcc',borderWidth:2,borderRadius:50,bottom:-4,height:40,width:40}}
      source={imagePath.icProfile}
      
      /></TouchableOpacity></View>
    
    <View style={{flexDirection:'column',paddingTop:10,left:-5,top:-20}}> 
      <Stories/>
      <View style={{
              borderBottomColor: '#ACA9A9',
              borderBottomWidth: 0.4,
              borderRadius:50,
              width:300,
              alignSelf:'center',
              top:10,
              left:7,
              }} />
     
     </View>
    <View style={{flexDirection:'column',flex:1,alignItems:'center',top:30}} ><CarouselCards/></View>
    
    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,top:-80}}>

        <Text>Home Screen</Text>

      </View>  */}
      <View style={{top:-150}}>
      <Watchlist></Watchlist></View>
      
      {/* <View style={{ flex: 2,top:0}}>
      <Interestroute></Interestroute></View>  */}
      
      {/* </ScrollView>  
       </View>  */}
       </>
      
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

const Routes = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {

   return (
     
         <Tab.Navigator initialRouteName="Home" screenOptions={{
           headerShown: false,
           tabBarShowLabel: false,
           activeTintColor: '#11bcbc',
           inactiveTintColor: '#a8a8a8',
           tabBarHideOnKeyboard: true,
           

           tabBarStyle: {
             
             marginTop:100,
             alignContent: 'center',
             alignItems: 'center',
             backgroundColor: "white",
             position: 'absolute',
             bottom: 0,
             borderBottomLeftRadius: 0,
             borderBottomRightRadius: 0,
             borderTopLeftRadius: 15,
             borderTopRightRadius: 15,
             matginHorizontal: 20,
             paddingHorizontal: 20,
             height: 60,
             //borderRadius: 50,
            shadowColor: "#000",
            shadowOffset: {
	            width: 100,
	            height: -50,
             
            },
            shadowOpacity: 1,
            shadowRadius: 100.00,

            elevation: 27,
            borderTopWidth:-100,
             
           }
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
return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Viewall" component={Viewall} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Editprofile" component={Editprofile} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Termsncondition" component={Termsncondition} />
        <Stack.Screen name="Profilephoto" component={Profilephoto} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default Routes