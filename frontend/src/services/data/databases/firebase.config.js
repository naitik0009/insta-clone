
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlv2NP3JEFaxNwyEuxpPhUdJNlzc_gnn4",
  authDomain: "insta-clone-c82f3.firebaseapp.com",
  projectId: "insta-clone-c82f3",
  storageBucket: "insta-clone-c82f3.appspot.com",
  messagingSenderId: "178376492620",
  appId: "1:178376492620:web:d4727c63e111223aa156e9",
  measurementId: "G-XZHB81V91X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const authentication = getAuth(app);