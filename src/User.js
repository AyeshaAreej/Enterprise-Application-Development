import React, { Component } from 'react'

 class User extends Component {
 
    render() {
        
    return (
      <div> <h1> Hello {this.props.name(false)}  </h1>
          
      </div>
    )
  }
}

export default User