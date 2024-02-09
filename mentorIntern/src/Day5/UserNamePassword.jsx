import React, { Component } from 'react';

class UsernamePassword extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: '',
      password: ''
    };
  }

  handleForm = (e) => {
    e.preventDefault();
    alert(`Username: ${this.state.username}, Password: ${this.state.password}`);
  }

  handleInputValues = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  

  render() {
    return (
      <div className='dayOne' style={{ height: "200px" }}>
        <form onSubmit={this.handleForm}>
          <h1>Controlled Form example</h1>

          <label>Username:</label>
          <input type='text' value={this.state.username} name='username' onChange={this.handleInputValues} />
          <br/>
          <label>Password:</label>
          <input type='password' value={this.state.password} name='password' onChange={this.handleInputValues} />
          <br/>

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default UsernamePassword;
