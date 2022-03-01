import {React,useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image,Linking,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SLIDER_WIDTH = Dimensions.get('window').width + 5
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

//const [bookmarked, setBookmarked] = useState(false);
const CarouselCardItem = ({ item, index }) => {
 
 
  return (
      
    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.imageBackground}
      />
     
       <TouchableOpacity
     
     style={styles.opacitybookmark}
     
    activeOpacity='1'
    
    
     onPress={() => {alert('bookmarked');} }>
          <Text>
      <Ionicons style={styles.bookmark} name='bookmark-outline' size={20} />
      </Text> 
              </TouchableOpacity>
                   
                  
                   
      
    
                   
                   
      
       {/* <Text style={styles.header}>{item.title}</Text>  */}
      <Text style={styles.body}>{item.body}
      <Text style={{color:'gray'}}>— Here’s what we know so far</Text>
      </Text>
      <Text style={styles.form}>{item.form} | {item.date}</Text>
      <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://economictimes.indiatimes.com/') } >Read Full Article</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: ITEM_WIDTH,
    height:202.5,
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
   TextStyle: {
 
    color: '#11bbcc',
    textDecorationLine: 'underline',
    fontSize:8,
    bottom:1.5,
    paddingRight:5,
    alignSelf:'flex-end',
    
 
  },
  bookmark: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 225,
    paddingRight:3,
    width: 25,
    height: 25,
    
    
    //color: "black"
    
  },
   opacitybookmark: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 225,
    paddingRight:3,
    width: 25,
    height: 25,
    //backgroundColor:'red'
    //color: "black"
  },
  form:{
      color: "gray",
    fontSize: 8,
    paddingLeft: 20,
    //paddingLeft: 20,
    paddingRight: 20,
    left:-15,
    fontWeight: "bold",
    bottom:-12,
    alignSelf:'flex-start',
    paddingBottom:3

  }
})

export default CarouselCardItem