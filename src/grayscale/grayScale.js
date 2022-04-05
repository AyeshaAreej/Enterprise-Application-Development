import React, { Component } from 'react'
import cat from '../cat.png'
const GrayScale=(OriginalComponent)=>{
class NewComponent extends Component{
   
 
    
     
    render(){
        return <>
            <OriginalComponent
            src={cat} width={100} height={100} style={{filter: "grayscale(100%)"}}/>
        </>
    }
}
return NewComponent
}
export default GrayScale