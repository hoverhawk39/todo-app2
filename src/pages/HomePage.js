import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="header">React 練習專案</div>
      <div className="welcome">歡迎光臨我的頁面</div>
      <div className="btn-part">
        <Link to="/list">
          <button className="start">點此開始</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
