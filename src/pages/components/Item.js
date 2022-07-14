import React from "react";
import db from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Item = ({ id, input, path }) => {
  function deleteItem() {
    deleteDoc(doc(db, path, id));
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
