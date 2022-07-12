import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const HomePage = ({loginStatus, setLoginStatus}) => {

  const navigate = useNavigate();

  const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      setLoginStatus(true);
      console.log("登入完當下狀態 ",loginStatus);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    console.log("HomePage UE ",loginStatus);
    if (loginStatus) {
      navigate("/list");
    }
  }, [loginStatus]);

  return (
    <div>
      <div className="header">React 練習專案</div>
      <div className="welcome">歡迎光臨我的頁面</div>
      <div className="btn-part">
        <Link to="/list">
          <button className="start">點此開始</button>
        </Link>
        <button className="start" onClick={signInWithGoogle}>以Google帳戶登入使用</button>
      </div>
    </div>
  );
};

export default HomePage;
