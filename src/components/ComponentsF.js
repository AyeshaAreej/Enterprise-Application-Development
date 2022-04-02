import React, { Component } from 'react'
import {UserConsumer, UserContext} from '../App'

export class ComponentF extends Component {
  render() {
    return (
      <div>
      {/* 3rd step consuming values */}
      <UserContext.Consumer>
        {user=>{
          return <h1>{user}</h1>
        }

        }
      </UserContext.Consumer>
     
      </div> 
    )
  }
}

export default ComponentF