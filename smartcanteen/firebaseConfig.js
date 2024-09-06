import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getStorage } from 'firebase/storage';

// import * as Analytics from 'expo-firebase-analytics';
const firebaseConfig = {
    apiKey: "AIzaSyA57qJgEvOihKrEpnixGXRD_Xd_aycik8Y",

    authDomain: "smartcanteen-2b2ec.firebaseapp.com",
  
    projectId: "smartcanteen-2b2ec",
  
    storageBucket: "smartcanteen-2b2ec.appspot.com",
  
    messagingSenderId: "724367313244",
  
    appId: "1:724367313244:web:57dec98adfeb9459075999"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage(app);



export { db, app, auth, storage };