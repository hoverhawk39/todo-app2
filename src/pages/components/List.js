import React, { useEffect } from "react";
import Item from "./Item";
import db from "../../firestore";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "asc"));
// const c=collection(db,'todos');

const List = ({ listData, set, deleteData }) => {
  console.log("listData", listData);
  // console.log(typeof(listData));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      set(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="list">
      {listData.map((thing) => {
        const { id, item } = thing;
        const { todo } = item;
        return <Item key={id} id={id} input={todo} deleteData={deleteData} />;
      })}
    </div>
  );
};

export default List;
