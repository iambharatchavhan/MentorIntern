import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
    
    

  render() {
    return (
      <div className="dayOne">
       <h1>This this the parent component</h1>
       <Child/>
      </div>
    );
  }
}

export default Parent;
