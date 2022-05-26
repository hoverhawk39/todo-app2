import "./style.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
// import db from "./firestore";
// import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="list" element={<ListPage />} />
    </Routes>
  </BrowserRouter>
);
