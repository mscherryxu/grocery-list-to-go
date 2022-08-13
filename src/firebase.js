import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbalzDvIRKOmJLLB5W7xCWtcLz_O-CREw',
  authDomain: 'grocery-list-to-go-app-b8098.firebaseapp.com',
  projectId: 'grocery-list-to-go-app-b8098',
  storageBucket: 'grocery-list-to-go-app-b8098.appspot.com',
  messagingSenderId: '28050415457',
  appId: '1:28050415457:web:b6067886cacece7776af20',
  measurementId: 'G-K3YZTGV0EC',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const firestore = getFirestore();

// Firebase Realtime Database
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   // The value of `databaseURL` depends on the location of the database
//   databaseURL: "https://DATABASE_NAME.firebaseio.com",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
