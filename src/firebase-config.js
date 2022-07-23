// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9xdfwzXKt8X_o1oWykIHnWmIv2Z-CuEI",
  authDomain: "blogweb-ae7e7.firebaseapp.com",
  projectId: "blogweb-ae7e7",
  storageBucket: "blogweb-ae7e7.appspot.com",
  messagingSenderId: "746381381951",
  appId: "1:746381381951:web:5d92c22ea789ba5c8d438a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
