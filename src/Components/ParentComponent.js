import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          parentName:'Parent'
       }
       this.greetParent=this.greetParent.bind(this)
     }
     greetParent(childName){
         //template literals
         alert(`Hello ${this.state.parentName} from ${childName} `)
              
        }
  render() {
    return (
      <div>
    <h1>Methods as Props</h1>
      <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  } 
}

export default ParentComponent