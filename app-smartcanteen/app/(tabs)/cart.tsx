import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the types for the cart item and API response
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartResponse {
  items: {
    product: {
      _id: string;
      name: string;
      price: number;
      imageUrl: string;
    };
    quantity: number;
  }[];
}

// Function to fetch cart items from backend
export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCartItems = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken'); // Get the token from AsyncStorage
      console.log(token);
      if (token) {
        const response = await axios.get<CartResponse>('http://192.168.136.92:5000/api/cart', {
          headers: {
            Authorization: `${token}`, // Pass the token as a Bearer token in the Authorization header
          },
        });

        // Check if response has items before mapping
        if (response.data.items && response.data.items.length > 0) {
          const mappedItems = response.data.items.map(item => ({
            id: item.product._id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            imageUrl: `http://192.168.136.92:5000/${item.product.imageUrl}`, // Ensure the full URL for the image
          }));
          setCartItems(mappedItems);
        } else {
          setCartItems([]); // Set an empty array if no items are found
        }
      } else {
        console.log('Token not found');
      }

      setLoading(false);
    } catch (err: any) {
      console.error('Error fetching cart items:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems(); // Fetch cart items on mount
  }, []);

  // Calculate total amount of the cart
  const calculateTotalAmount = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalAmount: number = calculateTotalAmount(cartItems);

  const handlePlaceOrder = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken'); // Get the token from AsyncStorage
      if (!token) {
        console.log('No auth token found.');
        return;
      }

      const orderData = {
        items: cartItems.map(item => ({
          product: item.id,
          quantity: item.quantity,
        })),
        totalPrice: totalAmount, // Add the total amount
        status: "Pending",
        shippingAddress: "Testing",
      };

      const response = await axios.post('http://192.168.136.92:5000/api/orders', orderData, {
        headers: {
          Authorization: `${token}`, // Send token in the Authorization header
          'Content-Type': 'application/json',
        },
      });

      fetchCartItems(); // Refresh cart items

      Alert.alert(response.data.message);
    } catch (err: any) {
      console.error('Error placing order:', err);
    }
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: ${item.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.loadingText}>Loading Cart...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  // If cart is empty, show a message
  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyCartText}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>

      {/* Cart List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartList}
      />

      {/* Total Amount */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
      </View>

      {/* Place Order Button */}
      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
}

// Define the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#181f3c',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  cartList: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  quantity: {
    fontSize: 14,
    color: '#555',
  },
  totalContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  loadingText: {
    color: '#ffffff',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
});
