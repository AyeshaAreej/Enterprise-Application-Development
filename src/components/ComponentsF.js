import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {value=>{
          return <h1>{value}</h1>
        }

        }
      </UserConsumer>
     
      
    )
  }
}

export default ComponentF