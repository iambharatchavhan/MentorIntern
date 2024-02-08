import React, { Component } from 'react';
import './counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

  }

 
  render() {
    return (
      <div className='counter-parent'>
      <div className='counter'>
        <button onClick={()=>this.setState({count:this.state.count+1})}>+</button>
        <h1 className='count'>{this.state.count}</h1> 
        <button onClick={()=>this.setState({count:this.state.count-1})}>-</button>
      </div>
      </div>
     
    );
  }
}

export default Counter;



