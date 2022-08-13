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
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
