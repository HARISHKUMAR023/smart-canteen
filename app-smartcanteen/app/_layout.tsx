import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
       
      }}>
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen name="login"  />
      <Stack.Screen name="(tabs)"  />
      
    </Stack>
  );
}
