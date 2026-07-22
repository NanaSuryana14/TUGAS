// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6KAkRBQmxAdKb3SnLytQtzuy8OYy07AI",
  authDomain: "dbujikom-6d91b.firebaseapp.com",
  projectId: "dbujikom-6d91b",
  storageBucket: "dbujikom-6d91b.firebasestorage.app",
  messagingSenderId: "977343809693",
  appId: "1:977343809693:web:9c8e5a626856d144e7ac74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);