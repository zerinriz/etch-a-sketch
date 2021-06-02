import Board from "./components/Board";
import "./App.css";
import { useState } from "react";

function App() {
  const [size, setSize] = useState(20);
  const [color, setColor] = useState("black");

  const clearBoard = () => {
    var elements = document.getElementsByClassName("gridElement");
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
    }
    setColor("black");
  };

  const reset = () => {
    const changeGrid = prompt("What size grid do you want ?");
    if (changeGrid === null || changeGrid < 1) {
      setSize(15);
    } else if (changeGrid > 50) {
      prompt("You can't pick above 50");
      setSize(changeGrid);
    } else {
      setSize(changeGrid);
    }
    clearBoard();
  };

  return (
    <div className="App">
      <h1 className="App-header">ETCH-A-SKETCH</h1>
      <button className="big-button" onClick={() => setColor("black")}>
        Black
      </button>
      <button className="big-button" onClick={() => setColor("")}>
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
