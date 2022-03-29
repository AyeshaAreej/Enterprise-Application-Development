import React from 'react'

function ChildComponent(props) {
  return (
    <div>
    {/* <button onClick={props.greetHandler}>Greet Parent</button><br/> */}
    <button onClick={()=>props.greetHandler('child')}>Greet parent from child</button>
    </div>
  )
}
  
export default ChildComponent