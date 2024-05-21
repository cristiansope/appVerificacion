import { useState, useEffect } from 'react'
import './App.css'

// IMPORTACIÓN COMPONENTES

import { Header } from './components/Header.jsx'
import { Form } from './components/Form.jsx'
import { Revisions } from './components/Revisions.jsx'
import { Footer } from './components/Footer.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

function App() {
  const [dbStatus, setDbStatus] = useState('Checking database connection...');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        await set(ref(database, 'test/path'), {
          test: 'Firebase connection successful'
        });
  
        const dbRef = ref(database);
        const snapshot = await get(child(dbRef, 'test/path'));
        if (snapshot.exists()) {
          setDbStatus('Conexión con Firebase realizada correctamente: ' + snapshot.val().test);
        } else {
          setDbStatus('No data available');
        }
      } catch (error) {
        setDbStatus('Error: ' + error.message);
      }
    };
  
    testConnection();

    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null); 
    });
  }, []);
  

  return (
      <div className="container">
        <Header />
        <main>
          <Form />
          <Revisions />       
        </main>
        <Footer />
        <div className="dbStatus">
          {dbStatus}
        </div>
      </div>
  )
}

export default App