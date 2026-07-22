// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrDy9PIC0Wcj9v7tQGHBXExXSSxOAotqw",
  authDomain: "dbrestoran-dad81.firebaseapp.com",
  projectId: "dbrestoran-dad81",
  storageBucket: "dbrestoran-dad81.firebasestorage.app",
  messagingSenderId: "1019084339808",
  appId: "1:1019084339808:web:bf0f8d86aeb8d4a3ca6105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

