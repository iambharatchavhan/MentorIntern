import React, { Component } from "react";

class Day3Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
    // implicit object
  }

  changeColor = () => {
    this.setState({
      color: "red",
    });
  };

  shouldComponentUpdate() {
    return true;
  }


  render() {
    return (
      <div className="dayOne">
        <h1 style={{color:this.state.color}}>The color is :{this.state.color}</h1>
        <button onClick={this.changeColor}>Change the Color</button>
      </div>
    );
  }
}

export default Day3Demo;
