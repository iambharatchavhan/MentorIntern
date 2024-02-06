import React, { Component } from "react";

class Greeting extends Component {
  constructor() {
    super();
    // Initialize the component's state
    console.log("constructor is called");
  }

  render() {
    // Access the name from the component's state
    const name = "SevenMentors";

    return (
      <div className="dayOne">
        <h2>This is first class component</h2>
        <h2>Welcome to {name}</h2>
      </div>
    );
  }
}

export default Greeting;
