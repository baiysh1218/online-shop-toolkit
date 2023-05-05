import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzVW0aTELYL3urk9kb4rgmqZzVkdCiebA",
  authDomain: "online-shop-1ee9b.firebaseapp.com",
  projectId: "online-shop-1ee9b",
  storageBucket: "online-shop-1ee9b.appspot.com",
  messagingSenderId: "181207068927",
  appId: "1:181207068927:web:b09e4da51c5d8dc2a19cca",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
