// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAZeYbBYudiZkt0Svfb3lRrQyjGQfqUoZc",
  authDomain: "crudbioskop-908b8.firebaseapp.com",
  projectId: "crudbioskop-908b8",
  storageBucket: "crudbioskop-908b8.firebasestorage.app",
  messagingSenderId: "857317705563",
  appId: "1:857317705563:web:7b3bb7d26bbb3b964e7c7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);