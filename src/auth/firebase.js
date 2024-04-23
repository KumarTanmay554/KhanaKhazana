// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzwoQevjvWRC_yoEPnzvoeatTPDfkjMQI",
  authDomain: "khanakhanzana-305c3.firebaseapp.com",
  databaseURL: "https://khanakhanzana-305c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khanakhanzana-305c3",
  storageBucket: "khanakhanzana-305c3.appspot.com",
  messagingSenderId: "999586275874",
  appId: "1:999586275874:web:eb54052639e5373637207b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth()