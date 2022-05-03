import React, { useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";

const ListPage = ({ minusOne }) => {
  function minus() {
    minusOne(function (prev) {
      return prev - 1;
    });
  }

  const [data, setData] = useState([]);
  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
      <div className="btn-part">
        <button className="goback" onClick={minus}>
          返回首頁
        </button>
      </div>
    </div>
  );
};

export default ListPage;
