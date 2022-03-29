import React, { Component } from 'react'
 class ConditionalWelcome extends Component {
      constructor(props){
          super (props)
          this.state=({
              isLoggedIn:true
          })
      }
  render() {
    //   <h1>Conditional Rendering</h1>
    //  let message
    //  if (this.state.isLoggedIn){
    //      message=<div>Welcome Ayesha</div>
    //  }
    //  else{
    //       message=<div>Welcome Guest</div>
    //  }
        
    return   (
      //Ternary Conditional Operator 
    // this.state.isLoggedIn ? <>Conditional Rendering <br/><div>Welcome Ayesha</div></> : <div>Welcome Guest</div>

      //Element variable
    /* <div>{message}</div> */

    //short circuit operator
    this.state.isLoggedIn && <div>Welcome Ayesha</div>
)  
    
  }
}

export default ConditionalWelcome