// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
      



const firebaseConfig = {
  apiKey: "AIzaSyBdeURjjLPcrK2ibcTXARS786o7aAoXp2E",
  authDomain: "hotel-firebase-practice.firebaseapp.com",
  projectId: "hotel-firebase-practice",
  storageBucket: "hotel-firebase-practice.appspot.com",
  messagingSenderId: "302794473033",
  appId: "1:302794473033:web:7bfafc847de5baf717c998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;