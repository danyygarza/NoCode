// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: "AIzaSyCWqe_Y6n36GbEekav1nWuesBvfqRpx8Wo",
  authDomain: "frida-nocode.firebaseapp.com",
  projectId: "frida-nocode",
  storageBucket: "frida-nocode.appspot.com",
  messagingSenderId: "160052347092",
  appId: "1:160052347092:web:5316cdc93c19e7402cbb41"
})

// Initialize Firebase

export const auth = app.auth();
export const db = firebase.firestore();

export default app;