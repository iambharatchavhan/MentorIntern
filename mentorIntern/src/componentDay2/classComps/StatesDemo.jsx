import React, { Component } from "react";

class StateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dummy name",
      city:"NA",
      age: 22,
    };
    // implicit object
  }


  changeName = () => {
    this.setState({
      name: "bharat",
      age: 30,
    });
  };

  changeCity = ()=>{
    this.setState({
        city: "Pune"
    })
  }

  render() {
    return (
      <div className="dayOne">
        <h1>Change the name :{this.state.name}</h1>
        <br />
        <h1>Change the city :{this.state.city}</h1>
        <button onClick={this.changeName}>Change the City</button>
        <button onClick={this.changeCity}>Change the City</button>
      </div>
    );
  }
}

export default StateDemo;
