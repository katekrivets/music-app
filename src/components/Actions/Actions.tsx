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
        <div className="action-button-text">Добавить</div>
      </div>
      <div className="share">
        <button className="click-button">
          <GrRedo />
        </button>
        <div className="action-button-text">Поделиться</div>
      </div>
    </div>
  );
}
export default Actions;
