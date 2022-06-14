import React, { useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./components/Edit";
import List from "./components/List";

const ListPage = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <Edit />
      <List listData={todos} set={setTodos} />
      <div className="btn-part">
        <Link to="/">
          <button className="goback">返回首頁</button>
        </Link>
      </div>
    </div>
  );
};

export default ListPage;
