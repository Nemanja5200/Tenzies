import { Header } from "./components/Header.jsx";
import "./App.css";
import { DiceSection } from "./components/DiceSection.jsx";
function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <DiceSection />
      </div>
    </>
  );
}

export default App;
