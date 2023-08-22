// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxhT3tiznhuhkIuuwWypraRSBpX0GKj1U",
  authDomain: "poggerschat-ba9d9.firebaseapp.com",
  projectId: "poggerschat-ba9d9",
  storageBucket: "poggerschat-ba9d9.appspot.com",
  messagingSenderId: "1081973420438",
  appId: "1:1081973420438:web:7cc669e8bfaf4906b56db7",
  measurementId: "G-EBJYDD2G1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

