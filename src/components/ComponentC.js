import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  render() {
    return (
      <div>
    <h1>in c</h1>
      <ComponentE/>
      </div>

    )
  }
}

export default ComponentC