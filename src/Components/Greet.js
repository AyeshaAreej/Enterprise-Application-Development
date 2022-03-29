import React from 'react'

//object destructuring
export default function Greet({name,degree,children}) {
    
    return (
      
    <div>
    <h1 >T his is {name} from function component and i am a {degree}</h1>
   
      <p> {children}</p>
    </div>
  )
}
