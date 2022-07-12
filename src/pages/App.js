import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ListPage from "./ListPage";

const App = () => {

  const [status, setStatus] = useState(false);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage loginStatus={status} setLoginStatus={setStatus}/>} />
        <Route path="/list" element={<ListPage loginStatus={status} setLoginStatus={setStatus} />} />
      </Routes>
    </div>
  );
};

export default App;
