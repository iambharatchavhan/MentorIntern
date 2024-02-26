//when state is Object and action is also Object
//with string attribute type so we define action as action.type
import { useReducer, useState } from "react"
const initialState={
    counter1:0
}

const reducer=(state,action)=>
{
    switch(action.type)
    {
        case 'Increment':return {counter1:state.counter1+1};
        case 'Decrement':return {counter1:state.counter1-1};
        case 'Reset':return initialState;
        default:return state;

    }

}
const UseReducer2=()=>
{
    const [count,dispatch]=useReducer(reducer,initialState);

    return <div>
        <div>Count - {count.counter1}</div>
        <button onClick={()=>dispatch({type:'Increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'Decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
    </div>

}
export default UseReducer2;