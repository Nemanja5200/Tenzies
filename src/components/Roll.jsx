import React from "react";
import "../css/Roll.css";
export const Roll = (props) => {
  return (
    <>
      <div className="roll-container">
        <button onClick={props.onClick}
        > {props.hasWon? "New Game": "Roll"}</button>
      </div>
    </>
  );
};
