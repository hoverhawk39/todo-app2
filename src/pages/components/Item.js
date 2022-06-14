import React from "react";
import db from "../../firestore";
import { doc, deleteDoc } from "firebase/firestore";

const Item = ({ id, input }) => {
  function deleteItem() {
    deleteDoc(doc(db, "todos", id));
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
