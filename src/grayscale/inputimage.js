import React from 'react'
import GrayScale from './grayScale'


function MyImage(props) {
  return (
    <div>
    <img src={props.src}  width={props.width} height={props.height} style={props.style} alt='cat'/>
    </div>
  )
}


export default GrayScale(MyImage)

