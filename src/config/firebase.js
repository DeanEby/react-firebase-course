//imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// firebase instance data
const firebaseConfig = {
  apiKey: "AIzaSyA4NNqHzLRYgnwOwiTjAL5qFFxGJiMYR8M",
  authDomain: "fir-course-8e6e0.firebaseapp.com",
  projectId: "fir-course-8e6e0",
  storageBucket: "fir-course-8e6e0.appspot.com",
  messagingSenderId: "971205879285",
  appId: "1:971205879285:web:8b39f2dea9e3a7e23eacbc",
  measurementId: "G-7SEWPQL552"
};
//creates the apps instance that can be used elsewhere in the project
const app = initializeApp(firebaseConfig);

// creates the email and password authorization
export const auth = getAuth(app);

// creates the google authorization
export const googleProvider = new GoogleAuthProvider();

// creates the database instance that can be used elsewhere in the project
export const db = getFirestore(app);

export const storage = getStorage(app);