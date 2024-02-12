import { Component } from "react";


class ValidateForm extends Component {
      constructor() {
        super()
        this.state={
            username:"",
            password:""
        }
      }  

  handleSubmit = (e)=>{
    this.validate()
    e.preventDefault()

  }


  validate= () =>{

    if(this.state.username === '' && this.state.password === ''){
        alert("userName should not be empty " )
    }else if(this.state.username.charAt(0) !=this.state.username.charAt(0).toUpperCase()){
        alert("First Latter should be capital and password should less than 8 char")
    }else if(this.state.password.length > 8){
        alert("password should less tha 8 char")

    } else{
        alert(`Username: ${this.state.username} and Password: ${this.state.password}`)
    }

  }

  handleUsername = (e) =>{
    this.setState({
        username:e.target.value
    })
  }

  handlePassword = (e) =>{
    this.setState({
        password:e.target.value
    })
  }


render() {
    return(
        <div>
            <form onSubmit={(e)=>this.handleSubmit(e)}>
            <h1>Validation From</h1>
            <label>Username</label>
            <input type="text" placeholder="Enter your username" onChange={(e)=>this.handleUsername(e)}/>
            <input type="password" placeholder="Enter password" onChange={(e)=>this.handlePassword(e)}/>
            <button type="submit">Submit</button>
                
            </form>
          
        </div>
    )
}

}


export default ValidateForm