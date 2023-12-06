// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAyMR9uqwchaUGLEGmjoIXfnzVMvHtkCY",
  authDomain: "triveous1.firebaseapp.com",
  projectId: "triveous1",
  storageBucket: "triveous1.appspot.com",
  messagingSenderId: "1067436880795",
  appId: "1:1067436880795:web:c4e3e0f8cf0095604ce73e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export default db;

