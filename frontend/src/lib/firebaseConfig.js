// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvkmw3mYAuK6Qr_Yc47iRjculoMmNhmzE",
  authDomain: "pern-expense-tracker.firebaseapp.com",
  projectId: "pern-expense-tracker",
  storageBucket: "pern-expense-tracker.firebasestorage.app",
  messagingSenderId: "1019382592337",
  appId: "1:1019382592337:web:c9376e0dbf2536ca47d970",
  measurementId: "G-X3ELMG4VF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth}