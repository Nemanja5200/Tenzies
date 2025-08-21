
import {Header} from "./components/Header.jsx";
import './App.css';
import {DiceSection} from "./components/DiceSection.jsx";
import {Roll} from "./components/Roll.jsx";
function App() {

  return (
    <>

      <div className="main-container">
          <Header/>
          <DiceSection/>
          <Roll/>
      </div>



    </>
  )
}

export default App
