import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { jwtDecode } from "jwt-decode";// Correct jwt-decode import
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the Food type for API data
interface Food {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Define the structure of the JWT token's payload
interface DecodedToken {
  userId: string; // The user ID
  exp: number; // Token expiration time
  iat: number; // Token issue time
}

const FoodCard: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [userId, setUserId] = useState<string | null>(null); // Store userId

  // Fetch food data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Food[]>('http://192.168.136.92:5000/api/products');
        setFoods(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to check and decode token to get userId
  const checkToken = async () => {
    try {
      // Fetch the token from AsyncStorage
      const token = await AsyncStorage.getItem('authToken');

      // Check if token exists
      if (token) {
        const decoded: DecodedToken = jwtDecode(token);
        // console.log(decoded)
        setUserId(decoded.userId); // Store userId from the decoded token
        // console.log('Token:', token);  // Log the token for debugging
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };

  // Run checkToken when component mounts
  useEffect(() => {
    checkToken();
  }, []);

  // Increment quantity for a specific food item
  const incrementQuantity = (foodId: string) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [foodId]: (prevQuantities[foodId] || 1) + 1,
    }));
  };

  // Decrement quantity for a specific food item (minimum 1)
  const decrementQuantity = (foodId: string) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [foodId]: prevQuantities[foodId] > 1 ? prevQuantities[foodId] - 1 : 1,
    }));
  };

  // Add to cart function
  const handleAddToCart = async (food: Food) => {
    const quantity = quantities[food._id] || 1;
    if (!userId) {
      console.error('User ID not found');
      return;
    }

    const cartData = {
      userId: userId,
      productId:food._id,
      quantity:quantity
      // products: [
      //   {
      //     product: food._id,
      //     quantity: quantity,
      //   },
      // ],
    };

    try {
      const response = await axios.post('http://192.168.136.92:5000/api/cart/add',cartData);
      console.log(cartData)
      console.log('Added to cart:', response.data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <View style={styles.container}>
      {foods.map((food) => (
        <LinearGradient
          key={food._id}
          colors={['#181f3c', '#181f3c', '#32466e']}
          style={styles.card}
        >
          <View style={styles.cardContent}>
            <Image
              source={{ uri: `http://192.168.136.92:5000/${food.imageUrl}` }}
              style={styles.image}
            />
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.price}>${food.price}</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={() => decrementQuantity(food._id)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantities[food._id] || 1}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(food._id)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => handleAddToCart(food)} style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ))}
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Enables wrapping of child elements
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', // Ensure two cards fit in a row with some spacing
    borderRadius: 10,
    padding: 20,
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#fd8c00',
    marginBottom: 20,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#fd8c00',
    padding: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#fff',
  },
  addToCartButton: {
    backgroundColor: '#fd8c00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default FoodCard;
