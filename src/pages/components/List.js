import React, { useState, useEffect } from "react";
import Item from "./Item";
import db from "../../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { SpinnerCircular } from "spinners-react";

const List = ({ user }) => {
  // console.log("listData", listData);
  const spinner = { display: "block", margin: "auto" };
  const [listData, setListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dbPath = "todolist/" + user + "/todoitems";
  const Query = query(
    collection(db, "todolist/" + user + "/todoitems"),
    orderBy("timestamp", "asc")
  );

  useEffect(() => {
    console.log("onSnapshot works !!");
    const unsubscribe = onSnapshot(Query, (snapshot) => {
      setListData(
        snapshot.docs.map((doc) => ({
          index: doc.id,
          output: doc.data(),
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (listData.length !== 0) {
      // console.log("length of listData: not zero");
      setLoading(false);
    } else {
      // console.log("length of listData: zero");
      setTimeout(() => {
        setLoading(false);
      }, 3500);
    }
  }, [listData]);
  console.log(">> Length of ListData: ", listData.length);
  return (
    <div className="list">
      {loading ? (
        <SpinnerCircular
          style={spinner}
          size="15%"
          thickness={100}
          speed={100}
          color="#890F0D"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : listData.length ? (
        listData.map((thing) => {
          const { index, output } = thing;
          const { todo, timestamp } = output;
          {
            /* console.log(todo); */
          }
          return <Item key={index} id={index} input={todo} path={dbPath} />;
        })
      ) : (
        <div className="default">I got everything completed. Hurray!</div>
      )}
    </div>
  );
};

export default List;
