import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, Pressable, Text, ScrollView , ActivityIndicator, Modal} from 'react-native'; // Import ScrollView
import { db } from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import * as Location from 'expo-location';
// import * as Geocoding from 'expo-location'; // Import Geocoding from Expo's package
// import tw from 'twrnc';
// import {Picker} from '@react-native-picker/picker';

const Signupscreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
//   const [pincode, setPincode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
//   const [userType, setUserType] = useState('donor');
  const [modalVisible, setModalVisible] = useState(false); // Add modalVisible state
  const navigation = useNavigation();

  const isButtonDisabled = !(name && phoneNumber && email && password );

  const handleSignup = async () => {
    if (isButtonDisabled) {
      Alert.alert('Incomplete Information', 'Please fill in all required fields.');
      return;
    }

    if (phoneNumber.length !== 10) {
      Alert.alert('Invalid Phone Number', 'Phone number should be exactly 10 digits.');
      return;
    }
    
    setIsLoading(true); // Show loading indicator when signup starts
    setModalVisible(true); // Show modal when signup starts

    const auth = getAuth();
    try {
      // Simulate a delay (remove this in production)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data including the pincode and phoneNumber
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: name,
        email: email,
        phoneNumber: phoneNumber, // Changed to phoneNumber
        // pincode: pincode,
        // userType: userType,
      });

      console.log('User signed up successfully');
    } catch (error) {
      console.error('Signup error:', error);

      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Email Already in Use', 'The provided email is already registered. Please use a different email.');
      } else {
        Alert.alert('Signup Error', 'An error occurred while trying to sign up. Please try again.');
      }
    } finally {
      setIsLoading(false); // Hide loading indicator after signup completes (success or error)
      setModalVisible(false); // Hide modal after signup completes (success or error)
    }
  };

//   const getUserLocation = async () => {
//     try {
//       const { status } = await Location.requestForegroundPermissionsAsync();

//       if (status !== 'granted') {
//         Alert.alert('Location Permission', 'Location permission is required to fetch the pincode.');
//         return;
//       }

//       const location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;

//       const result = await Geocoding.reverseGeocodeAsync({ latitude, longitude });

//       if (result[0]) {
//         setPincode(result[0].postalCode || 'N/A');
//       } else {
//         setPincode('N/A');
//       }
//     } catch (error) {
//       console.error('Error getting location:', error);
//       // Handle location retrieval error here
//     }
//   };

  useEffect(() => {
    // getUserLocation();
  }, []);

  return (
    <ScrollView className="bg-white " >
 
      <View className=" p-10 py-7 rounded-lg">
      <Text className="font-bold mt-1 text-3xl text-black text-center">
          Share
          <Text className="font-bold text-3xl text-pink-500">{'Easy'}</Text>
        </Text>
        <Text className="font-bold mt-6 text-2xl text-black text-center"  >Signup</Text>
      
        <Modal // Add Modal component
          animationType="fade"
          transparent={true}
          visible={modalVisible}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <ActivityIndicator size="large" color="#56e41d" />
          </View>
        </Modal>

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          className="p-4 mt-4 rounded text-black border-2 border-pink-500"
        />
        <TextInput
          placeholder="Phone Number" // Updated placeholder
          value={phoneNumber} // Updated to phoneNumber
          onChangeText={setPhoneNumber} // Updated to setPhoneNumber
          className="p-4 mt-4 rounded text-black border-2 border-pink-500"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="p-4 mt-4 rounded text-black border-2 border-pink-500"
        />
            
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="p-4 mt-4 rounded text-black border-2 border-pink-500"
        />
        {/* <View   className=" mt-2 rounded text-stone-950 border-2 border-pink-500">
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
          
        >
          <Picker.Item label="Donor" value="donor" className="text-stone-950" />
          <Picker.Item label="Volunteer" value="volunteer"className="text-stone-950" />
          <Picker.Item label="NGO" value="ngo" className="text-stone-950" />
        </Picker>
        </View> */}



        {/* <TextInput
          placeholder="Pincode"
          value={pincode}
          onChangeText={setPincode}
          className="p-4 mt-4 rounded text-black border-2 border-pink-500"
        /> */}
        {/* <View style={tw`mb-5 mt-5 `}>
          <Pressable
            className="bg-pink-500 p-3 rounded"
            onPress={handleSignup}
            disabled={isButtonDisabled}
          >
            <Text className="font-semibold text-slate-50 text-center ">Sign up</Text>
          </Pressable>
          <View className="flex-row justify-center items-center mt-4">
          <Text className="font-normal text-lg text-black">Or sign up with:</Text>
          <Pressable onPress={() => alert('This feature will be added soon')}>
            <Image source={require('../assets/icons/google.png')} style={tw`w-8 h-8 ml-2`} />
          </Pressable>
          <Pressable onPress={() => alert('This feature will be added soon')}>
            <Image source={require('../assets/icons/facebook.png')} className="w-8 h-8 ml-2" />
          </Pressable>
        </View>
        </View> */}
        <Text className="font-normal mt-1 text-lg text-black text-center">
          You have an account already ?{' '}
          <Text onPress={() => navigation.navigate('Login')} className="font-semibold text-lg text-pink-500 ">
            {'Sign in'}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};



export default Signupscreen;