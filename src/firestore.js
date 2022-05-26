// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsH2NevTy5ppEyOJp9kmDFxG8hmW96wzA",
  authDomain: "wehelp-project.firebaseapp.com",
  projectId: "wehelp-project",
  storageBucket: "wehelp-project.appspot.com",
  messagingSenderId: "434072008102",
  appId: "1:434072008102:web:0cd60ebf9a555553e74b67",
  measurementId: "G-1CG45N8YEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
