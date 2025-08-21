import React, { useEffect, useState } from "react";
import "../css/DiceSection.css";
import { Dice } from "./Dice.jsx";
import { Roll } from "./Roll.jsx";
import Confetti from "react-confetti";

export const DiceSection = () => {
  const genereteDie = (id) => ({
    id: id,
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
  });

  const generetenewDice = () => {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(genereteDie(i));
    }
    return newDice;
  };

  const holdDie = (id) => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  };

  const rollDice = () => {
    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
  };

  const handleButtonClick = () => {
    if (hasWon) {
      resetGame();
    } else {
      rollDice();
    }
  };

  const resetGame = () => {
    setDice(generetenewDice());
    setHasWon(false);
  };

  const [dice, setDice] = useState(generetenewDice());
  const [hasWon, setHasWon] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setHasWon(true);
    }
  }, [dice]);
  return (
    <>
      <div className="dice-section">
        {dice.map((die) => (
          <Dice
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            onClick={() => holdDie(die.id)}
          />
        ))}
      </div>

      {hasWon && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
        />
      )}

      <Roll onClick={handleButtonClick} hasWon={hasWon} />
    </>
  );
};
