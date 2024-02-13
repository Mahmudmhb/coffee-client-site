// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLKaEfe7oisqkS9XQ188O9zdo5hZqRnJA",
  authDomain: "coffee-curd--operation.firebaseapp.com",
  projectId: "coffee-curd--operation",
  storageBucket: "coffee-curd--operation.appspot.com",
  messagingSenderId: "219364860610",
  appId: "1:219364860610:web:f902e173b344b2e379915b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;