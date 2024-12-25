import { Image } from 'expo-image';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const Carousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.offer}>Promo</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/food1.jpg')}
      />
    </View>
  );
}

export default Carousel;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10, // Ensures there's spacing between multiple carousels
  },
  offer: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    marginTop:5,
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.25, // Set height dynamically (25% of the screen height)
    borderRadius: 10,
  },
});
