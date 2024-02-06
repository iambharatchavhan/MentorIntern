import React,{ Component } from "react";

class CounterComponent extends Component {

       constructor(props){
        super(props);
        this.state = {
            count : 0
        }
       }



    render(){
        return(
            <div className="dayOne">
            <h1>Day {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count +1 })}>Increment</button>
            <button onClick={()=>this.setState({count:this.state.count - 1 })}>Decrement</button>
            </div>
        )
    }
}

export default CounterComponent;