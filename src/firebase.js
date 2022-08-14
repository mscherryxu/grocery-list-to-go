import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ***1st Database ran past quota reads for the day***

// const firebaseConfig = {
//   apiKey: 'AIzaSyDbalzDvIRKOmJLLB5W7xCWtcLz_O-CREw',
//   authDomain: 'grocery-list-to-go-app-b8098.firebaseapp.com',
//   projectId: 'grocery-list-to-go-app-b8098',
//   storageBucket: 'grocery-list-to-go-app-b8098.appspot.com',
//   messagingSenderId: '28050415457',
//   appId: '1:28050415457:web:b6067886cacece7776af20',
//   measurementId: 'G-K3YZTGV0EC',
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// export const firestore = getFirestore();

// ***Made 2nd Database to keep working on app***

const firebaseConfig = {
  apiKey: 'AIzaSyBlQqVqBFALfpY7ELjsROl9wLV5wU_vCks',
  authDomain: 'grocery-list-to-go-again.firebaseapp.com',
  projectId: 'grocery-list-to-go-again',
  storageBucket: 'grocery-list-to-go-again.appspot.com',
  messagingSenderId: '321547169222',
  appId: '1:321547169222:web:58d32a44c41a37ccef16c7',
  measurementId: 'G-SKEYNFQ3JW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
