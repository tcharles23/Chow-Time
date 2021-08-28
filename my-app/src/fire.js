// Import the functions you need from the SDKs you needim
import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3OQ7iOsws9v9IYHAqtH9QAB3zMhK5uF4",
  authDomain: "chowtime-5ed93.firebaseapp.com",
  projectId: "chowtime-5ed93",
  storageBucket: "chowtime-5ed93.appspot.com",
  messagingSenderId: "60761521899",
  appId: "1:60761521899:web:45db3841a174e17ab248ae",
  measurementId: "G-BGZXTGFKWP"
};

// Initialize Firebase
const fire =  firebase.finitializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default fire; 