import React, { Component } from 'react';

class BgColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };

  }

  subtraction = () =>{
   
  }

  render() {
    return (
      <div className='dayOne'>
        <h1>Hello Mentors</h1>
        <input type='text'  style={{background:this.state.color}} onChange={(e)=>this.setState({color:e.target.value})}/>

      </div>
    );
  }
}

export default BgColor;



