import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native';

export default function FoodScreen() {
  const [foods, setFoods] = useState([]);

  // Fetch food data from API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://192.168.127.92:5000/api/products'); // Replace with your API endpoint
        setFoods(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFoods();
  }, []);

  // Handle add to cart action
  const handleAddToCart = (food) => {
    // Implement your add to cart logic here
    console.log(`Added ${food.name} to cart`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
      <Image
            source={{ uri: `http://192.168.178.92:5000/${item.imageUrl}` }}
            style={styles.image}
          />
      <Text style={styles.title}>{item.name}</Text>
      {/* <Text style={styles.description}>{item.description}</Text> */}
      <Text style={styles.price}>${item.price}</Text>
      <Button
        title="Add to Cart"
        onPress={() => handleAddToCart(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
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
