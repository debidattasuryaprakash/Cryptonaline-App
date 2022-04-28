import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import Stories from '../components/story/Stories';
import Watchlist from '../components/Watchlist/Watchlist';
import CarouselCards from '../components/Carousel/CarouselCards';
import { useNavigation } from '@react-navigation/native';

const Homescreen = () => {
  const navigation = useNavigation();

  //const screenHeight = Dimensions.get('window').height;

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              paddingLeft: 0,
              paddingTop: 0,
              left: -0,
              top: 10,
            }}
          >
            <Searchbar />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.push('Profile')}
            >
              <Image
                style={{
                  borderColor: '#11bbcc',
                  borderWidth: 2,
                  borderRadius: 50,
                  bottom: -4,
                  height: 40,
                  width: 40,
                  right: 0,
                }}
                source={require('../assets/profileImage/profile2.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              paddingTop: 10,
              left: 0,
              top: 0,
            }}
          >
            <Stories></Stories>
            <View
              style={{
                justifyContent: 'center',
                borderBottomColor: '#ACA9A9',
                borderBottomWidth: 1,
                left: 50,
                width: 300,
                paddingTop: 0,
              }}
            />
          </View>
          <View style={{ paddingTop: 25 }}>
            <CarouselCards />
          </View>
          <View style={{ paddingTop: 25 }}>
            <Watchlist></Watchlist>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Homescreen;
