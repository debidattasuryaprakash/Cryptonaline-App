import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 0,

      image: require('../../assets/storyimage/profile1.jpg'),
    },
    {
      id: 0,

      image: require('../../assets/storyimage/profile1.jpg'),
    },
    {
      id: 0,

      image: require('../../assets/storyimage/profile1.jpg'),
    },
    {
      id: 0,

      image: require('../../assets/storyimage/profile1.jpg'),
    },
    ,
    {
      id: 0,

      image: require('../../assets/storyimage/profile1.jpg'),
    },
    ,
    {
      id: 0,

      image: require('../../assets/storyimage/profile1.jpg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 20 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }
          >
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 0,
                position: 'relative',
              }}
            >
              <View
                style={{
                  width: 98,
                  height: 98,
                  backgroundColor: 'transparent',
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
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
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}
              ></Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
