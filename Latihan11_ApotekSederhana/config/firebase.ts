// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE7HjAmU49rrxgBvWw3JCjqdOcxA2gowA",
  authDomain: "dbobat-c26cc.firebaseapp.com",
  projectId: "dbobat-c26cc",
  storageBucket: "dbobat-c26cc.firebasestorage.app",
  messagingSenderId: "70750233206",
  appId: "1:70750233206:web:5b20d8cbe095fd91ec3557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);