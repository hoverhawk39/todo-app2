import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import { useSelector } from "react-redux";

const App = () => {
  // const [status, setStatus] = useState(false);
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("login-status")) || false
  );
  const change = useSelector((state)=>state.lang.value);

  useEffect(() => {
    // console.log("HomePage UE ",loginStatus);
    localStorage.setItem("lang-status", JSON.stringify(change));
  }, [change]);

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<HomePage loginStatus={status} setLoginStatus={setStatus} />}
        />
        <Route
          path="/list"
          element={<ListPage loginStatus={status} setLoginStatus={setStatus} />}
        />
      </Routes>
    </div>
  );
};

export default App;
