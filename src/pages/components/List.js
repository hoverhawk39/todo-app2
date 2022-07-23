import React, { useState, useEffect } from "react";
import Item from "./Item";
import db from "../../firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { SpinnerCircular } from "spinners-react";

const List = ({ listData, setListData, user }) => {
  // console.log("listData", listData);
  const spinner = { display: "block", margin: "auto" };
  const [loading, setLoading] = useState(true);
  let uid;
  if (user !== null) {
    uid = user.uid;
    // console.log("User-List: ",uid);
  }
  const Query = query(
    collection(db, "todolist/" + uid + "/todoitems"),
    orderBy("timestamp", "asc")
  );
  const dbPath = "todolist/" + uid + "/todoitems";

  useEffect(() => {
    onSnapshot(Query, (snapshot) => {
      setListData(
        snapshot.docs.map((doc) => ({
          index: doc.id,
          output: doc.data(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    if (listData.length !== 0) {
      // console.log("length of listData: not zero");
      setLoading(false);
    } else {
      // console.log("length of listData: zero");
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
