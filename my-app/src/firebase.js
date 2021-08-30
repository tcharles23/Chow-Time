import { initializeApp } from "firebase/app";
import firebase from 'firebase';

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
const fire = firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
export default fire;