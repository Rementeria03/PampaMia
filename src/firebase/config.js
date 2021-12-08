// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZOvb1w6_RruZ4-j4ZvAKFYTdQmyY7TAk",
  authDomain: "pampamia-7e771.firebaseapp.com",
  projectId: "pampamia-7e771",
  storageBucket: "pampamia-7e771.appspot.com",
  messagingSenderId: "789699582790",
  appId: "1:789699582790:web:47c262337381950970a347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)