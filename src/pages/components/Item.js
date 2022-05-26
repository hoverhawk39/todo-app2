import React from "react";
import db from "../../firestore";
import { doc, deleteDoc } from "firebase/firestore";

const Item = ({ id, input, deleteData }) => {
  function deleteItem() {
    deleteData(function (prev) {
      deleteDoc(doc(db, "todos", id));
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div className="text">{input}</div>
      <button onClick={deleteItem} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
