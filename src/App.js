import Board from "./components/Board";
import "./App.css";
import { useState } from "react";

function App() {
  const [size, setSize] = useState(20);
  const [color, setColor] = useState("black");

  const setBlack = () => setColor("black");

  const setRandom = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const clearBoard = () => {
    var elements = document.getElementsByClassName("gridElement");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
    }
  };

  const reset = () => {
    clearBoard();
    const user = prompt("What size grid do you want ?");
    if (user === null || user < 1) {
      setSize(15);
    } else if (user > 50) {
      prompt("You can't pick above 50");
    } else {
      setSize(user);
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">ETCH-A-SKETCH</h1>
      <button className="big-button" onClick={setBlack}>
        Black
      </button>
      <button className="big-button" onClick={setRandom}>
        RGB
      </button>
      <button className="big-button" onClick={clearBoard}>
        Clear
      </button>
      <button className="big-button" onClick={reset}>
        Reset
      </button>
      <div className="Board">
        <Board size={size} color={color} />
      </div>
    </div>
  );
}

export default App;
