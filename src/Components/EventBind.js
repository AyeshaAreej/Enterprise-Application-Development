import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
        this.state = {
        message:'Hello'
      }
    //   3rd Approach of binding
       this.clickHandler= this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message:'Good Bye'
        })
    }
  
    //4th approach
    clickHandler2=()=>{
            this.setState({
                message:'Good Bye'
            })
        }
  render() {
    return (
      <div>
      <h1>4 Approaches of Event Binding  </h1>
      <h3> {this.state.message}</h3>
      {/* 1st approach this cause re render on every update */}
      <button onClick={this.clickHandler.bind(this)}> Click (1st approach)</button><br/>
      {/* 2nd arrow function approach */}
      <button onClick={()=>this.clickHandler()}> Click (2nd approach)</button> <br/>
      {/* 3rd approach binding inside constructor */}
      <button onClick={this.clickHandler}>Click (3rd approach) </button><br/>
      {/* 4th approach  setstate inside arrow function after onstructor */}
      <button onClick={this.clickHandler2}>Click (4th approach) </button>

      </div>
    )
  }
}
export default EventBind