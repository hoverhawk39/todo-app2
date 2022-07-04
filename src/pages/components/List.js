import React, { useState, useEffect } from "react";
import Item from "./Item";
import db from "../../firestore";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { SpinnerCircular } from "spinners-react";

const Query = query(collection(db, "todos"), orderBy("timestamp", "asc"));
// const Collection = collection(db,'todos');
const spinner = { display: "block", margin: "auto" };

const List = ({ listData, set }) => {
  console.log("listData #1", listData);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onSnapshot(Query, (snapshot) => {
      set(
        snapshot.docs.map((doc) => ({
          index: doc.id,
          output: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (listData.length != 0) {
      console.log("length: not zero");
      setLoading(false);
    } else {
      console.log("length: zero");
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [listData]);

  return (
    <div className="list">
      {loading ? (
        <SpinnerCircular
          style={spinner}
          size="20%"
          thickness={100}
          speed={100}
          color="#0080FF"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        listData.map((thing) => {
          const { index, output } = thing;
          const { todo, timestamp } = output;
          console.log(todo);
          return <Item key={index} id={index} input={todo} />;
        })
      )}
    </div>
  );
};

export default List;
