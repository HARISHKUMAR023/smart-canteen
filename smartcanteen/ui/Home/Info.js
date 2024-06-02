import React from 'react'
import {  Text, View , ScrollView,Button ,Pressable} from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
export const Info = () => {
  return (
<ScrollView>

<View className="flex flex-row justify-between mx-4 p-4 bg-rose-600 rounded-md shadow-2xl drop-shadow-2xl">
    <View>
    <Text className="font-bold text-white text-lg p-1">Claim Your Daily Pre Order</Text>
    <Text className="text-gray-300 font-bold p-1">With Smart Canteen</Text>
    <Pressable className="bg-white text-rose-600 rounded-md p-3"  onPress={() => {console.log('Pressed')}}>
        
            <Text className="font-bold" >Order Now</Text>
  </Pressable>
    </View>
   
    
<Image
        className=" w-32 h-32 rounded-full rop-shadow-xl"
        source={Asset.fromModule(require('../../assets/cook.png'))}
        // style={{ width: "100%", height: 200 }}
        // contentFit="cover"
        transition={1000}
      />
</View>
</ScrollView>
  )
}
