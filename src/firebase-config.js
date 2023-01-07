import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2sj9YOe6UoqwN7pOTjp6epr9wIFJvM_Y", //use env. file for it 
    authDomain: "midwife-418d9.firebaseapp.com",
    projectId: "midwife-418d9",
    storageBucket: "midwife-418d9.appspot.com",
    messagingSenderId: "695552784219",
    appId: "1:695552784219:web:f20ee6909a7a110d388c7e",
    measurementId: "G-FS7H6LBD2X"
  };

  const app = initializeApp(firebaseConfig);
 
  export const db = getFirestore(app);