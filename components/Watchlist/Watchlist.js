import {React,useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image,Linking,TouchableOpacity,Button, ListViewComponent} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Viewall from '../../screens/viewall';
import {useNavigation} from '@react-navigation/native';
import imagepath from './imagepath';




export const SLIDER_WIDTH = Dimensions.get('window').width + 110
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


 
  //const [bookmarked, setBookmarked] = useState(false);
const Watchlist = ({ item, index }) => {
  const navigation = useNavigation();
 
  return (
    
    <>
    <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingRight:15,top:-12}}>
    <Text style={styles.watchlist}>Watchlist</Text>
    <TouchableOpacity onPress={() =>
                  navigation.push('Viewall')
                }>
    <Text style={styles.viewall}  >View All</Text></TouchableOpacity></View>
    
    <View style={styles.container} key={index}>
      <Image style={styles.image} source={imagepath.icBit}></Image>
         <View
  style={{
    borderBottomColor: '#ACA9A9',
    borderBottomWidth: 0.4,
    borderRadius:50,
    width:300,
    alignSelf:'center',
    top:-30,
    left:0,}}/>
   <Image style={styles.image2} source={imagepath.icSol}></Image>

    </View>
 
       
    
    </>
                  
                   
      
    
                   
                   
      
  
  )
}
const styles = StyleSheet.create({
  container: {
  
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft:10,
    left:15,
    paddingRight:10,
    width: ITEM_WIDTH,
    height:99.5625,
    paddingBottom: 40,
    shadowColor: "#000",
    paddingTop:40,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius:100,
    top:-35,
    left:8
  },
    image2: {
    width: 40,
    height: 40,
    borderRadius:100,
    top:-25,
    left:8
  },
  header: {
    color: "#222",
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 2
  },
  body: {
    color: "#222",
    fontSize: 10,
    paddingLeft: 20,
    //paddingLeft: 20,
    //paddingRight: 20,
    left:-15,
    right:-15,
    fontWeight: "bold"
  },
   watchlist: {
    color: "black",
    fontSize: 16,
    
    
   
    fontWeight: "bold",
  
    
  },
  viewall: {
    color: "gray",
    fontSize: 12,
    
    right:5,
    top:4,
    fontWeight: "bold",
   
   
    
  }
   
  })

export default Watchlist