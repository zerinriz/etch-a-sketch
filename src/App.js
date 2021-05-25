import "./styles.css";
import GridElement from "./components/GridElement";
import Buttons from "./components/Buttons";

export default function App() {
  const gridNumber = 15;
  const gridMaker = (gridNumber) => {
    const gridArray = [];
    for (let i = 1; i <= gridNumber; i++) {
      gridArray.push(<GridElement />);
    }
    return gridArray;
  };

  const styleGrid = {
    border: "solid blue",
    display: "inline-grid",
    gridTemplateColumns: `repeat(${gridNumber}, 1fr)`,
    width: "40vw",
    height: "38vw",
    marginTop: 75,
    backgroundColor: "white",
  };
  return (
    <div className="app">
      <div className="header">
        <header>Etch a Sketch</header>
      </div>
      <div className="buttons">
        <Buttons />
      </div>
      <div style={styleGrid}>{gridMaker(gridNumber * gridNumber)}</div>
    </div>
  );
}
