import React from "react";
import { useSelector } from "react-redux";
import db from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Item = ({ id, input, path }) => {
  const switch_before = {
    delete: "Delete",
  };
  const switch_after = {
    delete: "刪除",
  };
  const change = useSelector((state) => state.lang.value);
  function deleteItem() {
    deleteDoc(doc(db, path, id));
  }

  return (
    <div className="item">
      <div className="text">{input}</div>
      <button onClick={deleteItem} className="delete">
        {change ? switch_after.delete : switch_before.delete}
      </button>
    </div>
  );
};

export default Item;
