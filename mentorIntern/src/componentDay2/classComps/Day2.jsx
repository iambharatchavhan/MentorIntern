import React,{ Component } from "react";

class MyFirstClassComponent extends Component {

       constructor(props){
        super(props);
        this.state = {
            name:"varna"
        }
       }



    render(){
        return(
            <div className="head">
            <h1>Day {this.props.day}</h1>
            </div>
        )
    }
}

export default MyFirstClassComponent;