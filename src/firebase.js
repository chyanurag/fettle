// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCfOCQSf5eJXEOQJW_T-jS9WHkI0ehd17w",
  authDomain: "mini-project-13d4f.firebaseapp.com",
  projectId: "mini-project-13d4f",
  storageBucket: "mini-project-13d4f.appspot.com",
  messagingSenderId: "132623963301",
  appId: "1:132623963301:web:47419373e1a13bfc84294c",
  measurementId: "G-JJCM2679LX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }
