import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./components/Edit";
import List from "./components/List";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const ListPage = ({loginStatus, setLoginStatus}) => {

  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  // const user = auth.currentUser;
  console.log("登入狀態：",loginStatus);

  useEffect(() => {
    // console.log("ListPage UE ",loginStatus);
    if (!loginStatus) {
      navigate("/");
    }
  }, [loginStatus]);

  const signOutFromGoogle = () =>{
    signOut(auth).then(() => {
      console.log("Sign Out Successfully.");
      setLoginStatus(false);
      // navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="app">
      <Edit />
      <List listData={todos} setListData={setTodos} />
      <div className="btn-part">
          <button className="goback" onClick={signOutFromGoogle}>離開並登出Google帳戶</button>
      </div>
    </div>
  );
};

export default ListPage;
