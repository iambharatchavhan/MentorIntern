import React, { Component } from 'react';

class Controlled extends Component {
  constructor(props) {
    super(props);
  
    this.state={
        username:'',
        address: '',
        profession:''
    }
  
  }

  handleForm =(e) => {
    e.preventDefault()
    alert(this.state.username + "" + this.state.address + "" +this.state.profession )
  }

  handleInputValues = (e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    return (
      <div className='dayOne' style={{height:"200px"}}>
        <form onSubmit={(e)=>this.handleForm(e)}>
            <h1>Controlled Form example</h1>

            <label>userName:</label>
           <input type='text' value={this.state.value} name='username' onChange={(e)=>this.handleInputValues(e)}/>
           <br/>
           <label>address:</label>
           <textarea name='address' value={this.state.value} onChange={(e)=>this.handleInputValues(e)}/>
           <br/>

           <select name='profession' value={this.state.value} onChange={(e)=>this.handleInputValues(e)}>
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

export default Controlled;
