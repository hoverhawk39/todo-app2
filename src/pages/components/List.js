import React, { useEffect } from "react";
import Item from "./Item";
import db from "../../firestore";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "asc"));
// const c = collection(db,'todos');

const List = ({ listData, set }) => {
  console.log("listData", listData);
  // console.log(typeof(listData));
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      set(
        snapshot.docs.map((doc) => ({
          index: doc.id,
          output: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="list">
      {listData.map((thing) => {
        const { index, output } = thing;
        const { todo, timestamp } = output;
        console.log(todo);
        return <Item key={index} id={index} input={todo} />;
      })}
    </div>
  );
};

export default List;
