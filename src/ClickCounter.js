import React, { Component } from 'react'

 class ClickCounter extends Component {
  
    render() {
        const {count,incrementCount}=this.props
    return (
        
      <div><h1>ClickCounter</h1>
      <button onClick={incrementCount}>Click {count }times</button>
      </div>
    )
  }
}

export default ClickCounter