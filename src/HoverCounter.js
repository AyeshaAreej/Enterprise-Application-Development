import React, { Component } from 'react'

 class HoverCounter extends Component {
  
    render() {
        const {count,incrementCount}=this.props
    return (
        
      <div><h1>HoverCounter</h1>
      <h2 onMouseOver={incrementCount}>Hovered {count }times</h2>
       
      </div>
    )
  }
}

export default HoverCounter