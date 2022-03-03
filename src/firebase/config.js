// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCISX6JtsFEVyBkym6cePEh_ypViiiQO-8",
  authDomain: "vinyl-factory.firebaseapp.com",
  projectId: "vinyl-factory",
  storageBucket: "vinyl-factory.appspot.com",
  messagingSenderId: "558382881863",
  appId: "1:558382881863:web:ed5dc97710fde822dc2562",
  measurementId: "G-RWMH0V9D0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
