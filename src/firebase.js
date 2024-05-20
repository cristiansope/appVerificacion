// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDspbnNWKj3h1EWryXSbjaUhBfU5WGVqEY",
  authDomain: "proyecto-verificacion-b6d9d.firebaseapp.com",
  databaseURL: "https://proyecto-verificacion-b6d9d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proyecto-verificacion-b6d9d",
  storageBucket: "proyecto-verificacion-b6d9d.appspot.com",
  messagingSenderId: "491297719395",
  appId: "1:491297719395:web:1fdc66d96d881d0c3b2456",
  measurementId: "G-SVK6J7HH5B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
