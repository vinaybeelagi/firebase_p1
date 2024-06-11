import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUkHpqFGDu78Y5EHtj8ewSiJqwH04lTks",
    authDomain: "test-ca25c.firebaseapp.com",
    projectId: "test-ca25c",
    storageBucket: "test-ca25c.appspot.com",
    messagingSenderId: "40551971432",
    appId: "1:40551971432:web:4de491f035038a95ae99dd",
    measurementId: "G-BWC7ZC8TZX"
  };


const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app);