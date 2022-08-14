import React from 'react';
import Home from './pages/Home';
import './App.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const App = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBlQqVqBFALfpY7ELjsROl9wLV5wU_vCks',
    authDomain: 'grocery-list-to-go-again.firebaseapp.com',
    projectId: 'grocery-list-to-go-again',
    storageBucket: 'grocery-list-to-go-again.appspot.com',
    messagingSenderId: '321547169222',
    appId: '1:321547169222:web:58d32a44c41a37ccef16c7',
    measurementId: 'G-SKEYNFQ3JW',
  };

  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  return (
    <div className="App">
      <h1>Here is your grocery list to-go!</h1>
      <Home firestore={firestore} />
    </div>
  );
};

export default App;
