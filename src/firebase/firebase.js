import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTh5VcEp_FAtnESDmH3wf2TuZQKdUX7fo',
  authDomain: 'react-firebase-short-auth.firebaseapp.com',
  projectId: 'react-firebase-short-auth',
  storageBucket: 'react-firebase-short-auth.firebasestorage.app',
  messagingSenderId: '16765541994',
  appId: '1:16765541994:web:8171c8abb08dffc108f413',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
