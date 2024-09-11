import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Button, Image, FlatList ,TextInput} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons } from '@expo/vector-icons';
import Carousel from '@/components/Carousel';
import FoodCard from '@/components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
export default function FoodScreen() {
  const [foods, setFoods] = useState([]);
  const router = useRouter();
 
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('authToken');

      if (!token) {
        // If there's no token, redirect to the login page
        router.push('/login');
      }
    };

    checkAuth();
  }, []);
  // Fetch food data from API
  // useEffect(() => {
  //   const fetchFoods = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.136.92:5000/api/products'); // Replace with your API endpoint
  //       setFoods(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchFoods();
  // }, []);

  // Handle add to cart action
  // const handleAddToCart = (food) => {
  //   // Implement your add to cart logic here
  //   console.log(`Added ${food.name} to cart`);
  // };

  // const renderItem = ({ item }) => (
  //   <View style={styles.card} key={item.id}>
  //     {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
  //     <Image
  //           source={{ uri: `http://192.168.136.92:5000/${item.imageUrl}` }}
  //           style={styles.image}
  //         />
  //     <Text style={styles.title}>{item.name}</Text>
  //     {/* <Text style={styles.description}>{item.description}</Text> */}
  //     <Text style={styles.price}>${item.price}</Text>
  //     <Button
  //       title="Add to Cart"
  //       onPress={() => handleAddToCart(item)}
  //     />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={styles.sona}>SONA</Text>
          <Text style={styles.canteen}> CANTEEN</Text>
          
          </Text>
        <Entypo name="shopping-cart" size={24} color="white" />


      </View>
      <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} color="#788bb2" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search product"
        placeholderTextColor="#788bb2"
      />
    </View>
    {/* <Carousel/> */}
 
    <Carousel/>
    {/* <Carousel/> */}
    <FoodCard/>
   

      {/* <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center vertically
    justifyContent: 'space-between', // Space between the text and icon
     // Example background color
    padding: 10,
    marginTop:20,
    marginBottom:15
  },
  
  headerText: {
    color: 'white', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  sona:{
color:'#fd8c00',
fontSize:24,
fontWeight:'bold'
  },
  canteen:{
color:'white',
fontSize:24,
fontWeight:'bold'

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3d4962',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchInput: {
    // 
    
    flex: 1,
    padding: 10,
    color: '#788bb2',
    fontWeight:'bold',
    fontSize: 16, // Increase font size for placeholder text
    marginLeft: 10, // Add spacing between icon and input
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#181f3c',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
