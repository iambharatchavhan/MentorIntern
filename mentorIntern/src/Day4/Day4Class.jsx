import React, { Component } from 'react';

class EvenDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ companyName: event.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.companyName}
          onChange={this.handleChange}
          placeholder="Enter your name"
        />
        <h1>Hello, {this.state.companyName}</h1>

      </div>
    );
  }
}

export default EvenDemo;
