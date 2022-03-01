import { View, Text , Image,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import styles from '../styles/Profile.style';


export const SLIDER_WIDTH = Dimensions.get('window').width + 5
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const Profile = () => {
    const navigation = useNavigation();
  return (
    <><View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, paddingTop: 50 }}>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.push('Appbar')}>
              <Image
                  source={require("../assets/profileImage/back.png")} /></TouchableOpacity>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.push('Editprofile')}>
              <Image
                  source={require("../assets/profileImage/edit.png")} /></TouchableOpacity>
      </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'center',paddingLeft: 20, paddingRight: 20,top:-30}}>
          <View style={styles.profilecontainer}>
          <TouchableOpacity activeOpacity={1} onPress={() =>
                  navigation.push('Profilephoto')}>
              <Image style={{ borderColor: '#DF71A0', borderWidth: 6, borderRadius: 100, height: 150, width: 150}}
                  source={require("../assets/profileImage/profile.png")} /></TouchableOpacity></View>
      </View> 
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',paddingLeft: 20, paddingRight: 20,top:-40,alignContent:'center',alignItems:'center',fontSize:35}}>
          <Text style={{fontSize:35,color:'#383838',fontWeight:'700'}}>jenna d,soz</Text>
          <Text style={{fontSize:10.92,color:'#383838',top:0}}>jennadsoza12@gmail.com</Text> 
      </View>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingLeft: 20, paddingRight: 20,top:-60}}>
          <View style={styles.container}></View>
          <View style={styles.container}></View>
          <View style={styles.container}></View>

      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'center',paddingLeft: 20, paddingRight: 20,top:-100}}>
          <Text style={{fontSize:20.5,color:'#737272',fontWeight:'bold'}}>Your Interests</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:15}}>
              <View style={styles.interestcontainer}><Text style={{fontSize:14,color:'#575657',paddingTop:3}}>NFT</Text></View>
              <View style={styles.interestcontainer}><Text style={{fontSize:14,color:'#575657',paddingTop:3}}>NFT</Text></View>
              <View style={styles.interestcontainer}><Text style={{fontSize:14,color:'#575657',paddingTop:3}}>NFT</Text></View>
          </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:15}}>
              <View style={styles.interestcontainer}><Text style={{fontSize:14,color:'#575657',paddingTop:3}}>NFT</Text></View>
              <View style={styles.interestcontainer}><Text style={{fontSize:14,color:'#575657',paddingTop:3}}>NFT</Text></View>
              <View style={styles.interestcontainer}><Text style={{fontSize:14,color:'#575657',paddingTop:3}}>NFT</Text></View>
          </View>

      </View>
      <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',paddingRight:20,paddingLeft:20,top:130}}>
        <View style={{
              borderBottomColor: '#ACA9A9',
              borderBottomWidth: 0.4,
              borderRadius:50,
              width:300,
              alignSelf:'center',
              top:-215,
              paddingLeft:20,
              paddingRight:20,
             
              }} />
              
              <View style={{flexDirection:'row',paddingLeft:20,paddingRight:20,top:-210}}>
                  <TouchableOpacity activeOpacity={1} onPress={() =>
                  navigation.push('Faq')}>
                  <Ionicons name="help-circle-outline" size={40}></Ionicons></TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} onPress={() =>
                  navigation.push('Faq')}>
                  <Text style={{fontSize:18,paddingTop:8,left:20}}>FAQ</Text></TouchableOpacity>
              </View>
        <View style={{
              borderBottomColor: '#ACA9A9',
              borderBottomWidth: 0.4,
              borderRadius:50,
              width:300,
              alignSelf:'center',
              top:-210,
              paddingLeft:20,
              paddingRight:20,
              }} />
             
              <View style={{flexDirection:'row',paddingLeft:20,paddingRight:20,top:-210}}>
                  <TouchableOpacity activeOpacity={1} onPress={() =>
                  navigation.push('Termsncondition')}>
                  <Ionicons name="information-circle-outline" size={40}></Ionicons></TouchableOpacity>
                   <TouchableOpacity activeOpacity={1} onPress={() =>
                  navigation.push('Termsncondition')}>
                  <Text style={{fontSize:20,paddingTop:5,left:20}}>Terms and Conditions</Text></TouchableOpacity>
              </View>
        <View style={{
              borderBottomColor: '#ACA9A9',
              borderBottomWidth: 0.4,
              borderRadius:50,
              width:300,
              alignSelf:'center',
              top:-210,
              paddingLeft:20,
              paddingRight:20,
              }} />
              <View style={{flexDirection:'row',paddingLeft:25,paddingRight:20,top:-210}}>
                  <Ionicons name="log-out-outline" size={40}></Ionicons>
                  <Text style={{fontSize:20,paddingTop:5,left:20}}>Log Out</Text>
              </View>
     
        </View>
      </>
  )
}


export default Profile