import React, { useState } from "react";
import { useSelector } from "react-redux";
import db from "../../firebase";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

const Edit = ({ user }) => {
  const switch_before = {
    placehodler: "Things to be done ...",
    create: "Create"
  };
  const switch_after = {
    placehodler: "待解決事項 ...",
    create: "新增"
  };
  const [input, setInput] = useState([""]);
  const todoItem = collection(db, "todolist/" + user + "/todoitems");
  const change = useSelector((state)=>state.lang.value);

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
        placeholder={change?switch_after.placehodler:switch_before.placehodler}
        value={input}
        onChange={inputChange}
      />
      <button onClick={addItem} className="create">
        {change?switch_after.create:switch_before.create}
      </button>
    </div>
  );
};

export default Edit;
