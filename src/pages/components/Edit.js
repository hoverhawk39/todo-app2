import React, { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add }) => {
  const [note, setNote] = useState([""]);
  function noteChange(e) {
    setNote(e.target.value);
  }

  function addItem() {
    add(function (prevData) {
      return [
        ...prevData,
        {
          id: v4(),
          note:note,
        },
      ];
    });
  }
  return (
    <div className="addForm">
      <input type="text" value={note} onChange={noteChange} />
      <button onClick={addItem} className="insert">
        新增紀錄
      </button>
      <hr />
    </div>
  );
};

export default Edit;
