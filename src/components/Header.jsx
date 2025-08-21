import "../css/Header.css";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1> Tenzies</h1>
        <p>
          <span>
            {" "}
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.{" "}
          </span>
        </p>
      </div>
    </>
  );
};
