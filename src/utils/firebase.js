// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8bL-8XZhdM4oeSgGRkN1hPKyCMHcijl0",
  authDomain: "netflix-gpt-a8720.firebaseapp.com",
  projectId: "netflix-gpt-a8720",
  storageBucket: "netflix-gpt-a8720.appspot.com",
  messagingSenderId: "864514578944",
  appId: "1:864514578944:web:abde1faa87b8ae936096e5",
  measurementId: "G-THKB82ZZ2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);