import React, { Component } from 'react';

class ControlledDif extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: '',
      address: '',
      profession: 'Teacher'
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    alert(this.state.username + " " + this.state.address + " " + this.state.profession);
  }

  handleOne = (e) => {
    this.setState({ username: e.target.value });
  }

  handleTwo = (e) => {
    this.setState({ address: e.target.value });
  }

  handleThree = (e) => {
    this.setState({ profession: e.target.value });
  }

  render() {
    return (
      <div className='dayOne' style={{height: "200px"}}>
        <form onSubmit={this.handleForm}>
          <h1>Controlled Different function Form example</h1>

          <label>userName:</label>
          <input type='text' value={this.state.username} name='username' onChange={this.handleOne} />
          <br />
          <label>address:</label>
          <textarea name='address' value={this.state.address} onChange={this.handleTwo} />
          <br />

          <select name='profession' value={this.state.profession} onChange={this.handleThree}>
            <option>Teacher</option>
            <option>Farmer</option>
            <option>Engineer</option>
            <option>Doctor</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ControlledDif;
