import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCC1sLrxqPLIJGQP7M5jd2X3B6mSjJvN6I",
  authDomain: "disneyplus-clone-d74fc.firebaseapp.com",
  projectId: "disneyplus-clone-d74fc",
  storageBucket: "disneyplus-clone-d74fc.appspot.com",
  messagingSenderId: "238842038719",
  appId: "1:238842038719:web:0d34ddb0ff5eb30cf2b90a",
  measurementId: "G-LEQKRWL4M2",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
