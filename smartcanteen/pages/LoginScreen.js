import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, Text ,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error: ${errorCode} ${errorMessage}`);
      });
  };

  return (
    <View className="h-full" >
          <ImageBackground source={Asset.fromModule(require('../assets/login2.jpg'))} className="h-full">
         {/* <Image
        className=" w-full h-64 "
        source={Asset.fromModule(require('../assets/login2.jpg'))}

        style={{ width: "100%", height: 500 }}
        //  contentFit="cover"
        // transition={1000}
      /> */}
      <View  className=" bg-white rounded-t-2xl shadow-xl  absolute bottom-0  w-full ">
        <Text  className="font-bold pt-4 text-3xl text-black text-center">
          Smart 
          <Text  className="font-bold text-3xl text-red-500">{'Canteen'}</Text>
        </Text>
        <Text  className="font-bold mt-6 text-2xl text-black text-center">Login</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="p-4 mt-4 mx-2 rounded text-black text-lg border-b-2 border-red-500"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="p-4 mx-2 rounded border-b-2 text-lg border-rose-500 mt-5"
        />
        <View  className="mb-5 mt-5 mx-2">
          <Pressable  className="bg-rose-600 p-4 rounded-full mt-4 mx-16" onPress={handleLogin}>
            <Text  className="font-bold text-lg text-slate-50 text-center">Login</Text>
          </Pressable>
        </View>

      

        <Text  className="font-normal mt-12 text-lg text-black text-center">
          You don't have an account?{' '}
          <Text onPress={() => navigation.navigate('Signup')}  className="font-semibold text-lg text-rose-500">
            {'Signup'}
          </Text>
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;