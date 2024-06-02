import React from 'react';
import { Text, View, StyleSheet, Image,FlatList,ScrollView } from 'react-native';
import { useState, useEffect } from "react";
const Category = () => {
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
   
      
          <View   className="mt-1  bg-white  shadow-xl border border-gray-300  m-4   rounded-lg p-2 shadow-green-500/50 drop-shadow-xl">
            <Image
              source={{ uri: `http://192.168.178.92:5000/${item.imageUrl}` }}
              className="w-56 h-52 rounded-lg mx-2"
            />
            <Text className="font-bold text-black dark:text-gray-400 px-2 capitalize">
              {item.name}
            </Text>
            <Text className="font-bold text-gray-500 dark:text-gray-400 px-2 mb-2">
            ₹{item.price}
            </Text>
          
          </View>
   
    );
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <FlatList 
      className="  "
      data={data}
      renderItem={renderItem}
      // keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
      </ScrollView>
  );
};



export default Category;