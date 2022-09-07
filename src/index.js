import "./style.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import SwitchReducer from "./features/reducer"; 

const store = configureStore({
  reducer:{
    lang: SwitchReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
