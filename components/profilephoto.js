import { View, Text,Image } from 'react-native'
import React from 'react'
import imagepath from './imagePath'

const profilephoto = () => {
  return (
    <View style={{flex:1,alignContent:'center',alignItems:'center',justifyContent:'center'}}>
      <Image source={imagepath.icProfile}></Image>
    </View>
  )
}

export default profilephoto