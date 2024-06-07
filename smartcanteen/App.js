import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Provider as PaperProvider } from "react-native-paper";
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Produtes } from "./pages/Produtes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Home } from "./pages/Home";
import { auth } from "./firebaseConfig";
import AuthStack from "./pages/Authstack";
import { FontAwesome } from "@expo/vector-icons";
import LogoutScreen from "./pages/Logout";
const Tab = createMaterialBottomTabNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  // const iconColor = 'black';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  color = "#e11d48";
  return (
    <NavigationContainer>
      <PaperProvider className="h-full w-full bg-black drop-shadow-xl">
        {user ? (
          <Tab.Navigator
            inactiveColor="black"
            activeColor="#FF4500"
            shifting={true}
            activeIndicatorStyle={{ backgroundColor: "white" }}
            barStyle={{
              backgroundColor: "#fff",
              borderTopColor: "gray",
              borderTopWidth: 1,
            }}
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
                  <Fontisto
                    name="shopping-basket-add"
                    size={24}
                    color={color}
                  />
                ),
              }}
            />
            {/* <Tab.Screen
              name="Scan"
              component={Produtes}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialIcons
                    name="qr-code-scanner"
                    size={24}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="LogOut"
              component={LogoutScreen}
              options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesome name="user" size={24} color={color} />
                ),
              }}
            /> */}
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
      </PaperProvider>
    </NavigationContainer>
    // <View className="" >
    //   {/* <Text className="text-white">Open up App.js to start working on your app!</Text> */}
    //   {/* <StatusBar style="auto" /> */}

    // </View>
  );
}
