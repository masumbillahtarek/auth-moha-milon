// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-QF641KNWqB4AQyYy1v5WzWyeUEvdxbw",
  authDomain: "auth-moha-milon-cb7f2.firebaseapp.com",
  projectId: "auth-moha-milon-cb7f2",
  storageBucket: "auth-moha-milon-cb7f2.firebasestorage.app",
  messagingSenderId: "321536171045",
  appId: "1:321536171045:web:ce2edcd1b8ad64091ff3cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;