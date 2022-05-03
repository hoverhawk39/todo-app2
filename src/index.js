import "./style.scss";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

const Initial = () => {
  const [status, setStatus] = useState(0);
  console.log("status:", status);
  {
    if (status == 0) {
      return <HomePage plusOne={setStatus} />;
    } else {
      return <ListPage minusOne={setStatus} />;
    }
  }
};

ReactDOM.render(<Initial />, document.getElementById("root"));
