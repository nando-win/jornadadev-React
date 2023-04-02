// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu6pbbeWTTPXuWhYpst2TIGcDt88hB2ro",
  authDomain: "tiktok---jornada-e544a.firebaseapp.com",
  projectId: "tiktok---jornada-e544a",
  storageBucket: "tiktok---jornada-e544a.appspot.com",
  messagingSenderId: "865611079871",
  appId: "1:865611079871:web:3d4ddd6b58dd3914cba60a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
