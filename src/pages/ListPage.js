import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "./components/Switch";
import Edit from "./components/Edit";
import List from "./components/List";
import { useSelector } from "react-redux";
import db, { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const ListPage = ({ loginStatus, setLoginStatus }) => {
  const switch_before = {
    header: "My Backlog Record",
    btn: "Sign Out"
  };
  const switch_after = {
    header: "我的待辦事項",
    btn: "登出"
  };
  const navigate = useNavigate();
  const change = useSelector((state)=>state.lang.value);
  const user = auth.currentUser;
  if (user !== null) {
    const uid = user.uid;
    // console.log("User-ListPage: ", uid);
    const userUid = {
      uid: uid,
    };
    setDoc(doc(db, "todolist", uid), userUid);
    localStorage.setItem("user-id", JSON.stringify(uid));
  }
  const userId = JSON.parse(localStorage.getItem("user-id"));
  // console.log("登入狀態：", loginStatus);

  const signOutFromGoogle = () => {
    signOut(auth)
      .then(() => {
        // console.log("Sign Out Successfully.");
        setLoginStatus(!loginStatus);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("ListPage UE ",loginStatus);
    localStorage.setItem("login-status", JSON.stringify(loginStatus));
    if (!loginStatus) {
      navigate("/");
    }
  }, [loginStatus]);

  return (
    <div>
      <div className="header">{change?switch_after.header:switch_before.header}</div>
      <Switch/>
      <div className="core-app">
        <Edit user={userId} />
        <List user={userId} />
      </div>
      <div className="btn-part-sign-out">
        <button className="sign-out" onClick={signOutFromGoogle}>
          {change?switch_after.btn:switch_before.btn}
        </button>
      </div>
    </div>
  );
};

export default ListPage;
