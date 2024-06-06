import React from "react";
import { Text, View, Image, Button , TouchableOpacity,ScrollView,FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
export const Card = () => {
  const [data, setData] = useState([]);
  color = "white";
  useEffect(() => {
    fetch("http://192.168.178.92:5000/api/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  const handleAddToCart = (item) => {
    // Handle the add to cart action here
    console.log(`Adding product to cart: ${item.name}`);
  };

  const renderItem = ({ item }) => (
 
    
        <View  style={{ marginTop: 38, padding: 1 }} className="mt-3  bg-white  shadow-xl border border-gray-300  m-4   rounded-lg p-2 shadow-green-500/50 drop-shadow-xl">
          <Image
            source={{ uri: `http://192.168.178.92:5000/${item.imageUrl}` }}
            className="w-28 h-24 rounded-lg mx-2"
          />
          <Text className="font-bold text-black dark:text-gray-400 px-2 capitalize">
            {item.name}
          </Text>
          <Text className="font-bold text-gray-500 dark:text-gray-400 px-2 mb-2">
          ₹{item.price}
          </Text>
          <TouchableOpacity  className="flex flex-row items-center bg-primary p-2 rounded-md " onPress={() => handleAddToCart(item)}>
          <Fontisto name="shopping-basket-add" size={20} className="text-white " color={color}  />
            <Text className="text-white font-bold pl-1" >Add to Cart</Text>
          </TouchableOpacity>
        </View>
 
  );
  return (
   
    <FlatList 
    className="  "
    data={data}
    renderItem={renderItem}
    // keyExtractor={item => item.id.toString()}
    numColumns={2}
  />
 
  );
};
