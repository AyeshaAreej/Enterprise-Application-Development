
import {useState} from "react";
function MyCounter({initial,min,max}){
   
  let [num, setNum]= useState(initial);
  let incNum =()=>{
    if(num<10)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
   return(
    <>
    <div className="col-xl-1">
    <div class="input-group">
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
  </div>
</div>
</div>
   </>
  );
}
export default MyCounter;



// import React, { Component } from 'react'

// class Counter extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//             count:0
//         }
       
//       }

    
//       incrementCount=()=>{
//         this.setState(prevState => {
//           return {count: prevState.count + 1}
//         })

        

       
//    }
//   render() {
//     return (
//       <div><h1>My Counter</h1>
//       {/* <div>{this.props.render(this.state.count, this.incrementCount)}</div> */}

//    <button onClick={this.incrementCount}>Increment</button>
//    <h2>{this.state.count}</h2>

//    <button onClick={()=>{this.setState(this.state.count-1)}}>Decrement</button>
   
     
//       </div>
//     )
//   }
// }

// export default Counter