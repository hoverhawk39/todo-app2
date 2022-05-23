import "./style.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import db from "./firestore";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const orderCollection = collection(db, "todos");
// let key;
async function addNewDoc(){
    const docRef = await addDoc(orderCollection, {
      first: "Q",
      last: "Jane",
      born: 900008,
    });
    console.log(`Document written with ID: ${docRef.path}`);
    let key = docRef.path;
    console.log(key);
    // console.log(typeof(key));
    const goal = doc(db, key);
    const mySnapShot = await getDoc(goal);
    if(mySnapShot.exists()){
    const docData = mySnapShot.data();
    console.log(`My data is: ${JSON.stringify(docData)}`);
    }
}
addNewDoc();


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(  
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="list" element={<ListPage />} />
        </Routes>
    </BrowserRouter>
);
