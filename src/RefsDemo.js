import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      // 1st approach of creating ref
     this.inputRef= React.createRef()
     //2nd approach call back ref 
     this.cbRef=null
     this.setcbRef=element =>{
        this.cbRef=element
     }
        
      }
    componentDidMount(){
        //calling focus method on input element or 1st approach
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // 2nd approach checking whether cbRef is null or not as on unmount it will be null
        if(this.cbRef){
        this.cbRef.focus()} 
    }
    clickHandler=()=>
    {
        alert('Hello'+this.inputRef.current.value)
    }
  render() {
    return (
      <div><h1>Refs Demo</h1>
      {/*1st approach Attaching ref with input element */}
      {/* <input type='text' ref={this.inputRef }/> */}
      {/*2nd approach   Attaching ref with input element */}
      <input type='text' ref={this.setcbRef}/>
      <button onClick={this.clickHandler}>Click </button>
      </div>
    )
  }
}

export default RefsDemo