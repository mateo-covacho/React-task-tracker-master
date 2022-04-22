import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAS6LpIyzE0X7ORsrZ-9-ZLX6eRkx7uvHk",
  authDomain: "tasktrackerreact-e8f9a.firebaseapp.com",
  projectId: "tasktrackerreact-e8f9a",
  storageBucket: "tasktrackerreact-e8f9a.appspot.com",
  messagingSenderId: "69005988059",
  appId: "1:69005988059:web:801d1bbb892cd5a5ad3cfe",
  measurementId: "G-NFECTFRK02",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
