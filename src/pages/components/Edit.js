import React, { useState } from "react";
import db from "../../firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const Edit = ({ user }) => {
  const [input, setInput] = useState([""]);
  const todoItem = collection(db, "todolist/" + user + "/todoitems");

  function inputChange(e) {
    setInput(e.target.value);
  }

  function addItem() {
    const additem = {
      todo: input,
      timestamp: serverTimestamp(),
    };
    addDoc(todoItem, additem);
    setInput("");
  }

  return (
    <div className="add-form">
      <input
        type="text"
        placeholder="Things to be done ..."
        value={input}
        onChange={inputChange}
      />
      <button onClick={addItem} className="create">
        Create
      </button>
    </div>
  );
};

export default Edit;
