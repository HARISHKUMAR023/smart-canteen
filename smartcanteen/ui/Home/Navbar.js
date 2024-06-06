import React from 'react'
import {  Text, View } from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
export const Navbar = () => {
  return (
    <View style={{ marginTop: 38, padding: 1 }} className="bg-primary  p-4 flex flex-row justify-between rounded-lg mx-6 drop-shadow-xl">
        <View>
        <Text className="text-white font-bold text-lg rop-shadow-xl">Hii,Harish</Text>
      <Text className="text-white rop-shadow-xl">smart canteen</Text>
        </View>
     
      
     <Image
        className=" w-14 h-14 rounded-full rop-shadow-xl"
        source={Asset.fromModule(require('../../assets/crousel1.jpg'))}
        // style={{ width: "100%", height: 200 }}
        // contentFit="cover"
        transition={1000}
      />

</View>
  )
}
