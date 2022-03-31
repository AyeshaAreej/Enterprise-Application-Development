import React, { Component } from 'react'
import FRInput from './FRInput'

export default class FRParent extends Component {
    constructor(props) {
      super(props)
    //step 1
      this.inputRef=React.createRef() 
    }
    //4th step
    clickHandler=()=>{
     this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          {/* step 2 attaching ref to child component */}
          <FRInput ref={this.inputRef}/>
          <button onClick={this.clickHandler}> Focus Input  </button>
      </div>
    )
  }
}
