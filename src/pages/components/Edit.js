import React, { useState } from "react";
import db from "../../firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const todoRef = collection(db, "todos");

const Edit = () => {
  const [input, setInput] = useState([""]);
  function inputChange(e) {
    setInput(e.target.value);
  }

  function addItem() {
    const additem = {
      todo: input,
      timestamp: serverTimestamp(),
    };
    addDoc(todoRef, additem);
    setInput("");
  }
  return (
    <div className="addForm">
      <input type="text" value={input} onChange={inputChange} />
      <button onClick={addItem} className="insert">
        新增紀錄
      </button>
      <hr />
    </div>
  );
};

export default Edit;
