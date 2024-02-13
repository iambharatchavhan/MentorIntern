import { Component } from "react";

class LoginValidate extends Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            lengthErr: false,
            capital: false,
            passLength:false,
            minEight:false
        }
    }
     
    handleSubmit = (e) =>{
        e.preventDefault()
        this.validate()


    }



    validate = () => {
    if (this.state.username === '') {
        this.setState({
            lengthErr: true
        });
    } else if (this.state.username.charAt(0) !== this.state.username.charAt(0).toLocaleUpperCase()) {
        this.setState({
            capital: true
        });
    } else if (this.state.password === '') {
        this.setState({
            passLength: true
        });
    } else if (this.state.password.length <= 7) {
        this.setState({
            minEight: true
        });
    } else {
        this.setState({
            lengthErr: false,
            capital: false,
            passLength:false,
            minEight:false
        });
        alert("Logged in successfully");
        
    }
}




    render(){
        return(
            <div className="dayOne">
                <form onSubmit={(e)=>this.handleSubmit(e)}>   
                <input type="text" placeholder="Enter username" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
                <br/>
                <input type="password" placeholder="Enter password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                <div>
                    {this.state.capital &&(<h1 className="error-h1">First Later of name should be capital</h1>)}
                    {this.state.lengthErr &&(<h1 className="error-h1" >Username should not be empty</h1>)}
                    {this.state.passLength &&(<h1 className="error-h1" >Password should not be empty</h1>)}
                    {this.state.minEight &&(<h1 className="error-h1">Password Length must be greater than 8 letters</h1>)}
                </div>
                <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginValidate;