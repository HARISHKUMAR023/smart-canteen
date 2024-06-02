import React from 'react'
import {  Text, View,ImageBackground,ScrollView } from 'react-native';
import { Carosual } from '../components/Orders/Carosual';
import { Navbar } from '../ui/Home/Navbar';
import Category from '../ui/Home/Catagory';
import { Info } from '../ui/Home/Info';
import { Asset } from 'expo-asset';
export const Home = () => {
 
  return (
  //   <ImageBackground  source={Asset.fromModule(require('../assets/bg2.png'))} style={{flex: 1}}>
  //   <Navbar/>
  //   {/* <Carosual/> */}
  // </ImageBackground>
  <View className="bg-rose-100/50 h-full">
    <Navbar/>
    {/* <Catagory/> */}
    <View className="flex flex-row justify-between mx-4 p-4">
      <Text className="text-black font-bold text-lg">Catagory</Text>
      <Text  className="text-gray-600 font-bold text-sm">See All</Text>
    </View>
   

     
     
          <Category  />
      <Info/>
   
  </View>
  )
}
