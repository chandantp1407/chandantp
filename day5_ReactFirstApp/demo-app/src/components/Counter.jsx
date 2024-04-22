import React, { useState } from 'react'

const Counter=()=>{
    const[count,setcount]=useState(10)
    return (
        <div>
<h1>{count}</h1>
<button onClick={()=>setcount(count+1)}>Increment</button>
<button onClick={()=>setcount(count-1)}>Decrement</button>
<button onClick={()=>setcount(10)}>Reset</button>
        </div>
      )
}
    

export default Counter