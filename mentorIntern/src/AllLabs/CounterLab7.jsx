import React, { useCallback, useState } from "react";

const CounterLab7 = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("");

  const handleColors = () => {
    counter < 0 ? setColor("red") : setColor("green");
  };

  const add = () => {
    setCounter((prevCounter) => prevCounter + 1);
    handleColors();
  };

  const min = () => {
    setCounter((prevCounter) => prevCounter - 1);
    handleColors();
  };

  return (
    <div className="counter">
      <button className="add" onClick={() => add()}>
        +
      </button>
      <h1 className="counter-output" style={{ color: color }}>
        {counter}
      </h1>
      <button className="min" onClick={() => min()}>
        -
      </button>
    </div>
  );
};

export default CounterLab7;
