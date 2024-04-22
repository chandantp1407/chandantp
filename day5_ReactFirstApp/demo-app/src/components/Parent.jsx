// import React from 'react'
// import Child from './Child'

// export const Parent = (props) => {
//   return (
//     <div>
//         <Child {...props}/>
//     </div>
//   )
// }

// export default Parent
import React, { useState } from 'react'
import ChildContext from './ChildContext';
export const DataContext=React.createContext();

 const Parent = () => {
    const[data,setData]=useState(0)
  return (
    <DataContext.Provider value={[data,setData]}>
    <ChildContext/>
    </DataContext.Provider>
  )
}

export default Parent