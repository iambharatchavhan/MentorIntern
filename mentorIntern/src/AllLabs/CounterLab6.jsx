import React, { useState } from "react";

const ChangeColorButtonClick = () => {
  const [color, setColor] = useState("");

  //  console.log(color)
  return (
    <div className="color-container">
      <div>
        <h1 style={{ color: color }}> My Favorite Color is Yellow</h1>
        <div className="btn-group">
          <button
            onClick={() => setColor("red")}
            style={color == "red" ? { background: color } : null}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            style={color == "green" ? { background: color } : null}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={color == "yellow" ? { background: color } : null}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            style={color == "blue" ? { background: color } : null}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeColorButtonClick;
