import React from 'react'

// function FRInput() {
//   return (
//     <div>
//     <h1> Forwarding Ref</h1>
//         <input/>
//     </div>
//   )
// }

//Child component for forwardRef
//3rd step forwarding ref to input element into child component
//forwardRef methods takes a component as a parameter and this method takes two parameters  props and ref attribute 
const FRInput= React.forwardRef((props,ref) =>{
    return (
            <div>
            <h1> Forwarding Ref</h1>
                <input type='text' ref={ref}/>
            </div>
          )
})

export default FRInput