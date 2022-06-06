// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDtgP8ua1-peaDhQ9Y5FS4vwCj4-4CyVKk',
  authDomain: 'abctransports-c44d1.firebaseapp.com',
  projectId: 'abctransports-c44d1',
  storageBucket: 'abctransports-c44d1.appspot.com',
  messagingSenderId: '849219644203',
  appId: '1:849219644203:web:fe81fa5c38e2a8c1c0b36e'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
