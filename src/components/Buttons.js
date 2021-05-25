import React from "react";

function Buttons() {
    const setBlack = () => {
        const blackColor = { backgroundColor: "black " };
    }
return (
  <div>
    <button onClick={setBlack}>Black</button>
    <button>RGB</button>
    <button>Clear</button>
    <button>Reset</button>
  </div>
);
}
export default Buttons;