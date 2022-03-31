import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
     constructor(props) {
       super(props)
     
      this.componentRef=React.createRef()
     }

     clickHandler=()=>{
         this.componentRef.current.FocusInput()
     }
  render() {
    return (
      <div>FocusInput
      <h1>Ref to class component</h1>
      <Input ref={this.componentRef}/>
      <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    )
  }
}

export default FocusInput