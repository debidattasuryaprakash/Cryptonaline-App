import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 0,
      image: require('../../assets/storyImage/profile1.jpg'),
    },
    {
      id: 0,
      image: require('../../assets/storyImage/profile2.jpg'),
    },
    {
      id: 0,
      image: require('../../assets/storyImage/profile3.jpg'),
    },
    ,
    {
      id: 0,
      image: require('../../assets/storyImage/profile4.jpg'),
    },
    ,
    {
      id: 0,
      image: require('../../assets/storyImage/profile5.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 40}}>
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={{
                  paddingLeft:10,
                paddingBottom:10,
                paddingTop:10,
                flexDirection: 'column',
                paddingHorizontal: 5,
                position: 'relative',
              }}>
       
              <View
                style={{
                  width: 88,
                  height: 88,
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 100,
                  borderColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: "#000",
                  shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'transparent',
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;