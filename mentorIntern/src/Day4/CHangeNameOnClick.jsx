import { Component } from "react";

class ChangeNameOnClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Welcome visitor",
    };
  }

  render() {
    return (
      <div className="change-name">
        <h1>{this.state.name} </h1>
        <button
          className="primary-button"
          onClick={() => this.setState({ name: "Thanks For Visiting" })}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default ChangeNameOnClick;
