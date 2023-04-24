// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp-4aw6siXMG_7jGooH4mIYQ4qOPcvvm8",
  authDomain: "react-projecs.firebaseapp.com",
  projectId: "react-projecs",
  storageBucket: "react-projecs.appspot.com",
  messagingSenderId: "463018991476",
  appId: "1:463018991476:web:449d46ba414f955e125621",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
