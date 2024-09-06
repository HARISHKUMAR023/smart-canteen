import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function cart() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      {/* <Link href="/details">View details</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});