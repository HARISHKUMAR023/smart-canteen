import { Image } from 'expo-image';
import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderSuccessScreen() {
  const animationRef = useRef(null);

  useEffect(() => {
    // Play animation when component mounts
    if (animationRef.current) {
      setTimeout(() => {
        animationRef.current?.play();
      }, 100);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          ref={animationRef}
          source={{
            uri: 'https://lottie.host/a1dd85bd-c8a8-41bb-9d47-aee84cd1e97c/yCZ31W7ouz.json'
          }}
          style={styles.animation}
          autoPlay={true}
          loop={false}
        />
      </View>

      <Text style={styles.successText}>Order placed</Text>

      <View style={styles.qrContainer}>
        <Image
          source={{
            uri: 'https://api.qrserver.com/v1/create-qr-code/?data=Order123&size=200x200',
        }}
        
          style={styles.qrCode}
          contentFit="cover"
        />
        <Text style={styles.qrText}>QR code</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181f3c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  animationContainer: {
    width: 150,
    height: 150,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  successText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  qrContainer: {
    backgroundColor: '#FFFFFF',
    marginTop:15,
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  qrCode: {
    width: 260,
    height: 260,
  },
  qrText: {
    fontSize: 16,
    color: '#000000',
    marginTop: 5,
  },
});