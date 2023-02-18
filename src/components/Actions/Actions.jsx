import React from "react";
import { GrAdd } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import "./actions.css";
function Actions() {
  return (
    <div className="track-action">
      <div className="add">
        <button className="click-button">
          <GrAdd />
        </button>
        Добавить
      </div>
      <div>
        <button className="click-button">
          <GrRedo />
        </button>
        Поделиться
      </div>
    </div>
  );
}
export default Actions;
