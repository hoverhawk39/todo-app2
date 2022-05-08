import "./style.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsH2NevTy5ppEyOJp9kmDFxG8hmW96wzA",
  authDomain: "wehelp-project.firebaseapp.com",
  projectId: "wehelp-project",
  storageBucket: "wehelp-project.appspot.com",
  messagingSenderId: "434072008102",
  appId: "1:434072008102:web:0cd60ebf9a555553e74b67",
  measurementId: "G-1CG45N8YEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let rootElement=document.getElementById("root");

ReactDOM.render(  
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="list" element={<ListPage />} />
        </Routes>
    </BrowserRouter>, 
    rootElement
);
