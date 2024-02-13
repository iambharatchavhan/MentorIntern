import { Component } from "react";

// print the previous props and updated props with help of getSnapBeforeUpdate

class StateAndProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
    // implicit object
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before state Updates the Background Color was " + prevState.favoriteColor;
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    document.getElementById("div2").innerHTML =
      "Updated Background Color is " + this.state.favoriteColor 
  }

  render() {
    return (
      <div className="dayOne">
        <h1 style={{ background: this.state.favoriteColor }}>
          This is my favorite Color {this.state.favoriteColor}
        </h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default StateAndProps;
