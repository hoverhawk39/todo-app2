import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SwitchLanguage } from "../../features/reducer";

const Switch = () => {
  const dispatch = useDispatch();
  const change = useSelector((state) => state.lang.value);

  return (
    <div className="language">
      <div
        className={"switch" + (change ? " switch-ch" : "")}
        onClick={() => dispatch(SwitchLanguage())}
      >
        <div className="btn"></div>
      </div>
      <div className="language-info">English/中文</div>
    </div>
  );
};

export default Switch;
