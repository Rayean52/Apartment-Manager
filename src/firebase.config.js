// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk7tM3qOp0eO2uePoMizw1I24x1H3SoAg",
  authDomain: "apartment-manager-b64cb.firebaseapp.com",
  projectId: "apartment-manager-b64cb",
  storageBucket: "apartment-manager-b64cb.firebasestorage.app",
  messagingSenderId: "199948835481",
  appId: "1:199948835481:web:f178d6fe7142695036f608"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);