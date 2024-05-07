import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Produtes } from './pages/Produtes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Home } from './pages/Home';


const Tab = createMaterialBottomTabNavigator();
export default function App() {
  color = "white";
  return (
    <NavigationContainer >
    <PaperProvider className="h-full w-full bg-black">

    <Tab.Navigator
    inactiveColor='white'
    activeColor="black"
    shifting={true}
    
    barStyle={{ backgroundColor: '#3aab47' }}
    // tabBarActiveTintColor="black" // This will set the color of the active icon to black
  // tabBarInactiveTintColor="white"
 
  >
    <Tab.Screen
      name="Home"
      component={Home}
      
      options={{
        tabBarIcon: ({ color }) => (
<Entypo name="shop" size={24} color={color} />

        ),
      }}
    />
    <Tab.Screen
      name="Food"
      component={Produtes}
      options={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <Ionicons name="fast-food-sharp" size={24} color={color} />
        ),
      })}
    />
    <Tab.Screen
      name="checkout"
      component={Produtes}
      options={{
        tabBarIcon: ({ color }) => (
          <Fontisto name="shopping-basket-add" size={24}color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Scan"
      component={Produtes}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="qr-code-scanner" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="LogOut"
      component={Produtes}
      options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="log-out" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  </PaperProvider>
    </NavigationContainer>
    // <View className="" >
    //   {/* <Text className="text-white">Open up App.js to start working on your app!</Text> */}
    //   {/* <StatusBar style="auto" /> */}
     
    // </View>
  );
}


