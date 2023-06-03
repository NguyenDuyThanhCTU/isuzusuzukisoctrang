import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQb95rECZMyGDdHn-bWvPiuENW1uDEM0o",
  authDomain: "isuzusuzukisoctrang.firebaseapp.com",
  projectId: "isuzusuzukisoctrang",
  storageBucket: "isuzusuzukisoctrang.appspot.com",
  messagingSenderId: "353626704920",
  appId: "1:353626704920:web:5241793e155936cdd8076d",
  measurementId: "G-EWDJ5RKZ7K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
