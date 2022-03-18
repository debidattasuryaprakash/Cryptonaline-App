import { View, Text, TouchableOpacity, Image,ScrollView,SafeAreaView,StatusBar } from 'react-native';
import React,{ Component } from 'react';
import Searchbar from '../components/Searchbar';
import Stories from '../components/story/Stories';
import Watchlist from '../components/Watchlist/Watchlist';
import CarouselCards from '../components/Carousel/CarouselCards';
import { useNavigation } from '@react-navigation/native';





const Homescreen  = () => {
  const navigation = useNavigation();
  
  //const screenHeight = Dimensions.get('window').height;

    
  return (
    <>
      <ScrollView
      vertical={true}
      showsVerticalScrollIndicator={false}
      style={{paddingHorizontal: 0,height:100}}
      contentContainerStyle={{ flexGrow: 1 }}
      alwaysBounceVertical={true}>
        <StatusBar backgroundColor='black' barStyle="light-content" />


      <View
        style={{
          flex:1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          paddingLeft: 0,
          paddingTop: 0,
      }}>
      <Searchbar />
      <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.push('Profile')}>
          <Image
            style={{
              borderColor: '#11bbcc',
              borderWidth: 2,
              borderRadius: 50,
              bottom: -4,
              height: 40,
              width: 40,
            }}
            source={require('../assets/profileImage/profile2.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ flex:1,flexDirection: 'column', paddingTop: 10, left: 0, top: -40 ,}}
      >
        <Stories></Stories>
        <View
          style={{
            borderBottomColor: '#ACA9A9',
            borderBottomWidth: 0.4,
            borderRadius: 50,
            width: 300,
            alignSelf: 'center',
            top: -80,
            left: -5,
          }}
        />
      
      </View>
      <SafeAreaView
        style={{flex:1,top: -100}}>
      <CarouselCards />
      </SafeAreaView>
      <View style={{flex:1,top:-100}}>
        <Watchlist></Watchlist>
      </View>
  </ScrollView>
       </>
    
  );
};

export default Homescreen;
