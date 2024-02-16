// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw4K1LDHMPp8Yo5Shx2mWc1Ymbqg5Poq0",
  authDomain: "todo-app-c4251.firebaseapp.com",
  projectId: "todo-app-c4251",
  storageBucket: "todo-app-c4251.appspot.com",
  messagingSenderId: "751934222125",
  appId: "1:751934222125:web:4d6139b0ee01edc06f2da4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
