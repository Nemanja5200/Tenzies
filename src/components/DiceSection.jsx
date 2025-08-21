import "../css/DiceSection.css";
import { Dice } from "./Dice.jsx";
import { Roll } from "./Roll.jsx";
import Confetti from "react-confetti";
import { useDice } from "../hooks/useDice.jsx";
import { useWindowSize } from "../hooks/useWindowSize.jsx";

export const DiceSection = () => {
  const { dice, holdDie, rollDice, resetGame, hasWon } = useDice(10);
  const windowDimension = useWindowSize();

  const handleButtonClick = () => {
    if (hasWon) {
      resetGame();
    } else {
      rollDice();
    }
  };

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
