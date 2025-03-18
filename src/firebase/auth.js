import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async (email, password) => {
  const gProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, gProvider);

  return result;
};

export const doSignOut = () => {
  return auth.signOut();
};
