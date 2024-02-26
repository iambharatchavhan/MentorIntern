import { Component } from "react";

const DestructuringFun=(props)=>
{
   const {name,address}=props;
   const arr=[1,2];
 
   return <div>
    <h2>Name is {name}</h2>
    <h3>Address is {address}</h3>
   </div>
}

class DestructuringWithClass extends Component
{

render()
    {
        const {name, city}=this.props;

        return <div>
            <h2>Name is {name}</h2>
            <h3>City is {city}</h3>
            
        </div>

    }
}

export {DestructuringFun,DestructuringWithClass}