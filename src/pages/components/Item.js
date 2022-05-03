import React from "react";

const Item = ({ id, note, deleteData }) => {
    function deleteItem() {
      deleteData(function (prev) {
        return prev.filter((item) => item.id !== id);
      });
    }
  
    return (
      <div className="item">
        <div>
          <p>{note}</p>
        </div>
        <button onClick={deleteItem} className="remove">
          刪除
        </button>
      </div>
  );
  };
  
  export default Item;
  