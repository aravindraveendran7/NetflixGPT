// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtY85ECgQD2wCYu8Sl_k72w77s7kkDctk",
  authDomain: "netflixgpt-53692.firebaseapp.com",
  projectId: "netflixgpt-53692",
  storageBucket: "netflixgpt-53692.firebasestorage.app",
  messagingSenderId: "274355853947",
  appId: "1:274355853947:web:e2a89bf319ed36497660de",
  measurementId: "G-3STCMTCLEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
