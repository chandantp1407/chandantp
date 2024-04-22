import React from 'react'

 const Child = (props) => {
  return (
    <div>
        <h1>{JSON.stringify(props)}</h1>
    </div>
  )
}
export default Child