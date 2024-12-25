import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
export default function TabLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#181f3c" }}>
      <Tabs 
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#ffffff",  // Active icon and text color
          tabBarInactiveTintColor: "#788bb2", // Inactive icon and text color
          
          tabBarStyle: {
            backgroundColor: "#3d4962", 
            height: 60,
            borderRadius: 50,
            borderTopColor: '#181f3c',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 11 },
            shadowOpacity: 0.23,
            shadowRadius: 11.78,
            elevation: 15,
            marginBottom: 10,  
            marginLeft: 12,   
            marginRight: 12, 
          },
        }}
      >
        <Tabs.Screen 
          name="index"  
          options={{ 
            title: "",
            tabBarIcon: ({ color }) => (
              <Fontisto name="shopping-store" size={24} color={color} />

              // <Ionicons name="fast-food" size={24} color={color} />  // Use the dynamic color prop
            ),
          }}
        />
          <Tabs.Screen 
          name="product" 
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="fast-food" size={24} color={color} />  // Use the dynamic color prop
            ),
          }} 
        />
        
        <Tabs.Screen 
          name="cart" 
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <Entypo name="shopping-cart" size={24} color={color} />  // Use the dynamic color prop
            ),
          }} 
        />
        <Tabs.Screen 
          name="settings" 
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={24} color={color} />  // Use the dynamic color prop
            ),
          }} 
        />
        <Tabs.Screen 
  name="placeOrder" 
  options={{
    title: "",
    tabBarStyle: { display: 'none' }, // Hides the TabBar
    // tabBarButton: () => null,        // Completely hides the TabBar button
  }} 
/>

     
      
      </Tabs>
    </View>
  );
}
