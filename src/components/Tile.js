const Tile = ({ dimension, color }) => {
  const style = {
    margin:"auto",
    border: "1px solid black",
    width: dimension,
    height: dimension,
  };

  const changeColor = (e) => (e.target.style.backgroundColor = color);

  return <div className="gridElement" style={style} onMouseOver={changeColor} />;
};

export default Tile;
