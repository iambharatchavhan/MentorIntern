import { Component } from "react";


class Destructuring extends Component {
  
    constructor() {
        super()

    }



 render() {

    const {name, id} = this.props
    // console.log(this.props);
   
    return(
        <div>
            <h1>This is name = {name}</h1>
            <h1>This is id = {id}</h1>
        </div>
    )

 }


}


export default Destructuring