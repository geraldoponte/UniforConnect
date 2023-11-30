// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2pRVi30zHgu2VsUO_P568WUOBN6djQXY",
  authDomain: "uniforconnect.firebaseapp.com",
  projectId: "uniforconnect",
  storageBucket: "uniforconnect.appspot.com",
  messagingSenderId: "637489640680",
  appId: "1:637489640680:web:aa78592d948bd0110d855d",
};

// Initialize Firebase
// const FirebaseConfig = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
