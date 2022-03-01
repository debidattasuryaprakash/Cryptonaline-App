import {React,useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image,Linking,TouchableOpacity} from "react-native";

export const SLIDER_WIDTH = Dimensions.get('window').width + 0
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const Watchlistitem = ({ item, index }) => {
 
 
  return (
    <><Text style={styles.watchlist}>Watchlist</Text><View style={styles.container} key={index}>
      {/* <Image
        source={{ uri: item.imgUrl }}
        style={styles.imageBackground} /> */}

    </View></>
                  
                   
      
    
                   
                   
      
  
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    height:99.5625,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  imageBackground: {
    width: ITEM_WIDTH,
    height: 150,
    borderRadius:10
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
    color: "#222",
    fontSize: 10,
    paddingLeft: 20,
    //paddingLeft: 20,
    //paddingRight: 20,
    left:-15,
    right:-15,
    fontWeight: "bold"
  }
   
  })

export default Watchlistitem