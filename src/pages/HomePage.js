import React, { useEffect } from "react";
import Switch from "./components/Switch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const HomePage = ({ loginStatus, setLoginStatus }) => {
  const switch_before = {
    header: "My Backlog Record",
    quote:
      "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”",
    author: " － Will Durant",
    btn: "Sign In with Google",
  };

  const switch_after = {
    header: "我的待辦事項",
    quote:
      "「我們由自身的重複作為所造就。故卓越，並非一時作為，而是一種習慣。」",
    author: " － 威爾・杜朗特",
    btn: "用 Google 帳號登入",
  };

  const change = useSelector((state) => state.lang.value);
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        setLoginStatus(!loginStatus);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("HomePage UE ",loginStatus);
    localStorage.setItem("login-status", JSON.stringify(loginStatus));
    if (loginStatus) {
      navigate("/list");
    }
  }, [loginStatus]);

  return (
    <div className="main">
      <div className="header">
        {change ? switch_after.header : switch_before.header}
      </div>
      <Switch />
      <div className="quote">
        {change ? switch_after.quote : switch_before.quote}
      </div>
      <div className="author">
        {change ? switch_after.author : switch_before.author}
      </div>
      <div className="btn-part-sign-in">
        <button className="sign-in" onClick={signInWithGoogle}>
          {change ? switch_after.btn : switch_before.btn}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
