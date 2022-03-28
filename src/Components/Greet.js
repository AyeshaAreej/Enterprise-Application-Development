import React from 'react'

export default function Greet(props) {
    console.log(props)  
    return (
      
    <div>
    <h1 >Hello this is {props.name} from function component</h1>
      <p> {props.children}</p>
    </div>
  )
}
