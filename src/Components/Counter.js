import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
         this.state={
           count:0
        }

    }
incrementCount(){
// this.setState({
//     count:this.state.count+1
// },
// // This log statement will wait for state to be rendered completely then call back will be executed
// ()=>{console.log('Synchronous Value:' ,this.state.count)})

 //incrementing using prev state
 //add value using props
 this.setState((prevState,props)=>({
     count:prevState.count+1
 }))
 console.log('Asychronous value:',this.state.count)

 }
 


incrementFive(){
this.incrementCount()
this.incrementCount()
this.incrementCount()
this.incrementCount()
this.incrementCount()

}

  render() {
    return (
      <div>Counter
      <h1>You clicked {this.state.count} times</h1>
      <button onClick={()=>{this.incrementFive()}}>Click me </button>
      </div>
    )
  }
}
export default Counter ;
