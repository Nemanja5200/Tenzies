import React from "react";
import "../css/Dice.css";

export const Dice = (props) => {
  return (
    <>
      <div className="dice-container">
          <button
              onClick={props.onClick}
              style={{
                  backgroundColor: props.isHeld ? "#59E391" : "white",
                  transition: "background-color 0.3s ease"
              }}
          >{props.value}</button>
      </div>
    </>
  );
};
