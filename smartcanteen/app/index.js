import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/home">About</Link>
      {/* ...other links */}
      {/* <Link href="/user/bacon">View user</Link> */}
    </View>
  );
}
