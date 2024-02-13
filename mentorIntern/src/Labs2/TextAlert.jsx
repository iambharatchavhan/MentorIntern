
// Alert Lab 5

import React, { Component } from "react";

class TextBoxAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBoxContent: "",
    };
  }

  handleButtonClick = () => {
    alert("Hello " + this.state.textBoxContent);
  };

  handleTextBoxChange = (event) => {
    this.setState({
      textBoxContent: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.textBoxContent}
          onChange={this.handleTextBoxChange}
        />
        <button onClick={this.handleButtonClick}>Click me</button>
      </div>
    );
  }
}

export default TextBoxAlert;
