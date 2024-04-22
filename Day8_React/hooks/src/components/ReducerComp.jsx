
import React,{ useReducer} from "react";
const initialValue={ count :0}

const reducer =(state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {count:state.count+1};
        case "DECREMENT":
            return {count:state.count-1};

            default:
                return state;
    }
};
const ReducerComp =() =>{
    const[state,dispatcher]=useReducer(reducer,initialValue);
    return(
        <div>
<h1>{state.count}</h1>
<button onClick={()=>dispatcher({type:"INCREMENT"})}>INCREMENT</button>
<button onClick={()=>dispatcher({type:"DECREMENT"})}>DECREMENT</button>


        </div>
    )
}
    export default ReducerComp;
