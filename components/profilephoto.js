import { View, Text, Image } from 'react-native';
import React from 'react';

const Profilephoto = () => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={require('../assets/profileImage/profile.png')}></Image>
    </View>
  );
};

export default Profilephoto;
