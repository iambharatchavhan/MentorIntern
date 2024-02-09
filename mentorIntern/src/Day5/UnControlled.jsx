import React, { Component } from 'react';

class Uncontrolled extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this)

    this.input1 = React.createRef();
    this.input2 = React.createRef();
  }

  handleForm(e) {
    e.preventDefault()
    alert(`Hello input 1 = ${this.input1.current.value} and input 2 = ${this.input2.current.value}`)
  }

  render() {
    return (
      <div className='dayOne' style={{height:"200px"}}>
        <form onSubmit={(e)=>this.handleForm(e)}>
            <h1>Uncontrolled Form example</h1>
            <label>UserName:</label>
        <input type="text" ref={this.input1} />
        <br/>
        <label>Company Name:</label>
        <input type="text" ref={this.input2} />
        <br/>
        <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Uncontrolled;
