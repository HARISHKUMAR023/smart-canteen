import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
export default function SettingsScreen() {
  const router = useRouter();
//   const checkToken = async () => {
//     try {
//       // Fetch the token from AsyncStorage
//       const token = await AsyncStorage.getItem('authToken');
      
//       // Check if token exists
//       if (token !== null) {
//         console.log('Token:', token);  // This will log the actual token
//       } else {
//         console.log('No token found');
//       }
//     } catch (error) {
//       console.error('Error retrieving token:', error);
//     }
//   };
  
//   // Call the function in a useEffect hook to run it when the component mounts
//   useEffect(() => {
//     checkToken();
//   }, []);
  // Logout function
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
  const handleLogout = async () => {
    try {
      // Clear the token from AsyncStorage
      await AsyncStorage.removeItem('authToken');
       console.log(AsyncStorage.getItem('authToken'))
      // Navigate back to the login screen
      router.push('/login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while logging out.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#FF4500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
