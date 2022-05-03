import React from "react";

const HomePage = ({ plusOne }) => {
  function plus() {
    plusOne(function (prev) {
      return prev + 1;
    });
  }

  return (
    <div>
      <div className="header">React 練習專案</div>
      <div className="welcome">歡迎光臨我的頁面</div>
      <div className="btn-part">
        <button className="start" onClick={plus}>
          點此開始
        </button>
      </div>
    </div>
  );
};

export default HomePage;
