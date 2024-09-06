import { Slot } from 'expo-router';
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

export default function HomeLayout() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        contentFit="cover"
        source={require('../assets/images/login.svg')}
      />
      <Text style={styles.header}>Book Food online</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#000000"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/(tabs)" style={styles.button}>Login</Link>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.signupPrompt}>Don't have an account?</Text>
        <Link href="/(tabs)" style={styles.link}> Signup</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 15,
    // borderWidth: 1,
    borderColor: '#000000',
    // borderRadius: 8,
    borderBottomWidth:1,
    
    color:'#000000',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '25%',
    marginBottom: 20,
  },
  footerContainer: {
    flexDirection: 'row',
    // justifyContent:'space-around',
    alignItems: 'center',
    marginVertical: 10,

  },
  signupPrompt: {
    marginRight: 150,
    color: '#555',
  },
  link: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor:'#FFD700'
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFD700', // Yellow color
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    width:'100%'
  },
});
