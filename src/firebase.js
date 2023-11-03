// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyC4ncfRaWo5WDg0PJYl0BBaBPe92JkNPNw",
  authDomain: "final-portfolio-bartek.firebaseapp.com",
  projectId: "final-portfolio-bartek",
  storageBucket: "final-portfolio-bartek.appspot.com",
  messagingSenderId: "63407451339",
  appId: "1:63407451339:web:0bb1beb703c4e30e48bf4e",
  measurementId: "G-56QCG16013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
 export  const db = getFirestore(app)
 export  const auth = getAuth()

 

