import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./components/Edit";
import List from "./components/List";
import db, { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const ListPage = ({ loginStatus, setLoginStatus }) => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser;
  if (user !== null) {
    const uid = user.uid;
    // console.log("User-ListPage: ", uid);
    const userUid = {
      uid: uid,
    };
    setDoc(doc(db, "todolist", uid), userUid);
  }

  // console.log("登入狀態：", loginStatus);

  const signOutFromGoogle = () => {
    signOut(auth)
      .then(() => {
        // console.log("Sign Out Successfully.");
        setLoginStatus(false);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log("ListPage UE ",loginStatus);
    if (!loginStatus) {
      navigate("/");
    }
  }, [loginStatus]);

  return (
    <div>
      <div className="header">My Backlog Record</div>
      <div className="app">
        <Edit user={user} />
        <List listData={todos} setListData={setTodos} user={user} />
      </div>
      <div className="btn-part-sign-out">
        <button className="sign-out" onClick={signOutFromGoogle}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ListPage;
