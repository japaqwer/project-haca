import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBJblYStdRaZK0zy3LCbz6iptGg36Qk2jM',
  authDomain: 'hacaton-8e422.firebaseapp.com',
  projectId: 'hacaton-8e422',
  storageBucket: 'hacaton-8e422.appspot.com',
  messagingSenderId: '190833139378',
  appId: '1:190833139378:web:e8cc243597effc994033ab',
  measurementId: 'G-HH0H2MS7Z9',
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
