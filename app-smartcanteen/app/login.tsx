import { Slot } from 'expo-router';
import { Text, TextInput, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function HomeLayout() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const checkToken = async () => {
    try {
      // Fetch the token from AsyncStorage
      const token = await AsyncStorage.getItem('authToken');
      
      // Check if token exists
      if (token !== null) {
        console.log('Token:', token);  // This will log the actual token
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
  };
  
  // Call the function in a useEffect hook to run it when the component mounts
  useEffect(() => {
    checkToken();
  }, []);
  const handleLogin = async () => {
    console.log(phoneNumber, password);
    try {
      const response = await fetch('http://192.168.136.92:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);
      
      if (response.ok) {
        // Save token in AsyncStorage
        await AsyncStorage.setItem('authToken', data.token);

        // Navigate to the home page or any protected route
        router.push('/(tabs)');
      } else {
        Alert.alert('Login failed', data.message || 'Invalid phone number or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        contentFit="cover"
        source={require('../assets/images/login.svg')}
      />
      <Text style={styles.header}>Book Food Online</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#000000"
        value={phoneNumber}
        onChangeText={setPhoneNumber}  // Update the state with user input
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry
        value={password}
        onChangeText={setPassword}  // Update the state with user input
      />
      
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.signupPrompt}>Don't have an account?</Text>
        <Link href="/(tabs)" style={styles.link}>Signup</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181f3c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 15,
    borderColor: '#000000',
    borderBottomWidth: 1,
    color: '#000000',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '25%',
    marginBottom: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  signupPrompt: {
    marginRight: 150,
    color: '#555',
  },
  link: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: '#FFD700',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fd8c00', // Yellow color
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
  },
});
