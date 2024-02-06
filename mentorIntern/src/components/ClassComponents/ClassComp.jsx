import React, { Component } from 'react';

class ClassCompProps extends Component {
  render() {
    return (
      <div className='dayOne'>
        <h1>My name is {this.props.name}!</h1>
      </div>
    );
  }
}

export default ClassCompProps;