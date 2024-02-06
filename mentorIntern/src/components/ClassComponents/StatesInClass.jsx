import React, { Component } from 'react';

class Car extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      color: 'red',
      brand: 'TATA'
    };
  }

  render() {
    return (
      <div className='dayOne'>
   <h1>The color of the car is {this.state.color} and the Brand is {this.state.brand}  </h1>
        
      </div>
    );
  }
}

export default Car;
