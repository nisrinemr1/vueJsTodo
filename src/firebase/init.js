// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVDV-kxUMrkmPWRsd-8YcJQygTQdhe-4I",
  authDomain: "todo-fa4ef.firebaseapp.com",
  projectId: "todo-fa4ef",
  storageBucket: "todo-fa4ef.appspot.com",
  messagingSenderId: "327698951901",
  appId: "1:327698951901:web:6a30427bee3eaef6e17534",
  measurementId: "G-1N0Y5H0K63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export{
    auth,
    db
}