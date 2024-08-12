// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApqDXqRBjd6RdA--uyH5bQyVPPeDEPg-I",
  authDomain: "sellsmart-bab0c.firebaseapp.com",
  projectId: "sellsmart-bab0c",
  storageBucket: "sellsmart-bab0c.appspot.com",
  messagingSenderId: "300054938903",
  appId: "1:300054938903:web:8cd1eb828773163ac2e352",
  measurementId: "G-3VWXJQ11C0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
