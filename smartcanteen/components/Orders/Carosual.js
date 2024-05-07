import React from 'react'
import {  Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
export const Carosual = () => {
  return (
    <View className="">
      <Text className="text-green-500">welocme</Text>
     <Image
        className="mt-2 p-3 w-full h-64"
        source={Asset.fromModule(require('../../assets/crousel1.jpg'))}
        // style={{ width: "100%", height: 200 }}
        contentFit="cover"
        transition={1000}
      />

</View>
  )
}
