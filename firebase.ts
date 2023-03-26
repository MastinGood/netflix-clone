// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM0W6yN2Fcx7KPAi7_bANrmRWjtq5t-30",
  authDomain: "netflix-clone-37a21.firebaseapp.com",
  projectId: "netflix-clone-37a21",
  storageBucket: "netflix-clone-37a21.appspot.com",
  messagingSenderId: "737827431616",
  appId: "1:737827431616:web:d7dc8d64d4142d2c8b7925",
  measurementId: "G-PCB3BT88H3"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
