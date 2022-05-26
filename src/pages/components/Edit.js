import React, { useState } from "react";
import db from "../../firestore";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const todoRef = collection(db, "todos");

const Edit = ({ add }) => {
  const [input, setInput] = useState([""]);
  function inputChange(e) {
    setInput(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      const additem = {
        todo: input,
        timestamp: serverTimestamp(),
      };
      addDoc(todoRef, additem);
      setInput("");
      return [
        ...prevData,
        {
          id: additem.timestamp,
          item: additem.todo,
        },
      ];
    });
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
