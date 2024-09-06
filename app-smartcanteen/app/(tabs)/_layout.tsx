import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { View, Text, StyleSheet } from 'react-native';
export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ff8100",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity:  0.23,
          shadowRadius: 11.78,
          elevation: 15
          
          
        },
      }}>

      <Tabs.Screen name="index" options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food" size={24} color="black" />
          ),
        }}/>
      <Tabs.Screen name="cart" options={{
          title: "cart",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={24} color="black" />
          ),
        }} />
    </Tabs>
  );
}
