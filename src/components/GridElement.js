import { useState } from "react";
import Buttons from "./Buttons"

const light = { Buttons };
const dark = { backgroundColor: "black" };

const GridElement = () => {
  const [gridStyle, setStyle] = useState(light);
  return (
    <div
      className="gridElement"
      style={gridStyle}
      onMouseEnter={() => setStyle(dark)}
      onMouseOut={() => setStyle(light)}
    ></div>
  );
};
export default GridElement;
