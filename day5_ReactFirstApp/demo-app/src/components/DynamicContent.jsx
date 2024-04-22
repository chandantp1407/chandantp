import React from 'react'
import Heading from './Heading'
import Table from './Table'

const DynamicContent = ({isLoggedIn}) => {
//   return (
//     <div>
//         {isLoggedIn ?(<p>Welcome User</p>) : (<p>Please Login</p>)}
//     </div>
//)
//RenderingContent
const Component=isLoggedIn ? Heading : Table;
  return <Component/>
}

export default DynamicContent