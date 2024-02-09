import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    // Create a ref to store the DOM element
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // Access the DOM element using the ref
    this.myRef.current.focus();
  }

  render() {
    return (
      <div>
        {/* Assign the ref to the input element */}
        <input type="text" ref={this.myRef} />
      </div>
    );
  }
}

export default MyComponent;
