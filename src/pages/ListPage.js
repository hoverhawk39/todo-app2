import React, { useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";

const ListPage = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
      <div className="btn-part">
        <button className="goback">返回首頁</button>
      </div>
    </div>
  );
};

export default ListPage;
