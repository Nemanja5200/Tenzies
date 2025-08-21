import React from 'react';
import "../css/DiceSection.css"
import {Dice} from "./Dice.jsx";

export const DiceSection = () => {

    const diceArray = Array.from({ length: 10 });
    return (
        <>
            <div className="dice-section">
                {diceArray.map((_,index) => (
                    <Dice key = {index}/>
                ))}
            </div>
        </>
    );
};


