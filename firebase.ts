// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK8bcN67AT3jQbixiHhIGW4_2Orl9L6xc",
  authDomain: "chatgpt-bddc6.firebaseapp.com",
  projectId: "chatgpt-bddc6",
  storageBucket: "chatgpt-bddc6.appspot.com",
  messagingSenderId: "177654661618",
  appId: "1:177654661618:web:fb1fef5ebe6be020096b6b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
