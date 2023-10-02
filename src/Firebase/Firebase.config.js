// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfElzT7Lfz_JTyP72tvQafF8Sjsx3Rl0",
  authDomain: "user-email-password-auth-550aa.firebaseapp.com",
  projectId: "user-email-password-auth-550aa",
  storageBucket: "user-email-password-auth-550aa.appspot.com",
  messagingSenderId: "746388100399",
  appId: "1:746388100399:web:fbc645010207e91d2ebdda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;