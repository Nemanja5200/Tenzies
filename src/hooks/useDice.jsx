import { useState, useEffect } from "react";

export function useDice(numDice = 10) {
  const generateDie = (id) => ({
    id,
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
  });

  const generateNewDice = () => {
    return Array.from({ length: numDice }, (_, i) => generateDie(i));
  };

  const [dice, setDice] = useState(generateNewDice());
  const [hasWon, setHasWon] = useState(false);

  const holdDie = (id) => {
    setDice((prev) =>
      prev.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  };

  const rollDice = () => {
    setDice((prev) =>
      prev.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
  };

  const resetGame = () => {
    setDice(generateNewDice());
    setHasWon(false);
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0]?.value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setHasWon(true);
    }
  }, [dice]);

  return { dice, holdDie, rollDice, resetGame, hasWon };
}
