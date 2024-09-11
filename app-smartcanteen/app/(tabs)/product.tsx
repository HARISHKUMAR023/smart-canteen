import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import FoodCard from '@/components/Card';
export default function product() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
      <FoodCard/>
      {/* <Link href="/details">View details</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding:10,
    // flexDirection:'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#181f3c'
  },
});