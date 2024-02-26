import React, { useState } from "react";
import "./isrender.css";

const ConditionalRender = () => {
  const [isHide, setIsHide] = useState(true);

  const handleIsHide = () => {
    setIsHide(!isHide);
  };

  return (
    <section className="isRender">
      <div className="component">
        {isHide && <h3>Is component is Visible now ?</h3>}
      </div>
      <button
        className="btn-primary"
        style={!isHide ? { background: "#FE4036" } : {}}
        onClick={handleIsHide}
      >
        CLick here {isHide ? "Hide" : "Show"} component
      </button>
    </section>
  );
};

export default ConditionalRender;
