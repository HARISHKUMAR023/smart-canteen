import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import SignupScreen from './Signup';
// import Main from './Main';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
          {/* <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}  /> */}
      <Stack.Screen  name="Login" component={LoginScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}  />
    </Stack.Navigator>
  );
};

export default AuthStack;