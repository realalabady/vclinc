// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDndphJ9qtHA-WIMWIDeykUNmeZ8uA2X1I",
  authDomain: "vclinic-8e38f.firebaseapp.com",
  projectId: "vclinic-8e38f",
  storageBucket: "vclinic-8e38f.firebasestorage.app",
  messagingSenderId: "500330645502",
  appId: "1:500330645502:web:8178dd0c37ef4e883422af",
  measurementId: "G-XKEWK1ZTF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
