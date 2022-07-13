// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiXV0fD7fSyk_l-JnGeyx5O02xm9aIf9k",
  authDomain: "journal-app-react-abd71.firebaseapp.com",
  projectId: "journal-app-react-abd71",
  storageBucket: "journal-app-react-abd71.appspot.com",
  messagingSenderId: "565813581095",
  appId: "1:565813581095:web:922ce47bfa1e67b2a00502"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth();

export {
  db,
  googleProvider,
  auth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
}