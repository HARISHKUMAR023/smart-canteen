// Logout.js

import React from 'react';
import { View, Text,StyleSheet,Pressable } from 'react-native';

import { getAuth, signOut } from "firebase/auth";

const HandleSignOut = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};

const LogoutScreen = () => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Are you sure you want to sign out?</Text>
      <Pressable className="bg-pink-500 p-3 rounded " onPress={HandleSignOut}>
  
      <Text className="font-semibold text-slate-50 text-center mr-2">Sign OUt </Text>
    </Pressable>
  
    </View>
  );
};

export default LogoutScreen;
const styles = StyleSheet.create({
  container: {
    marginTop:30,
   height:900,
    backgroundColor: 'white',
      padding: 16,
      display:'flex',
      },
  btn:{
    marginBottom:20,
    backgroundColor:'#e80765'
  }
  
  
});