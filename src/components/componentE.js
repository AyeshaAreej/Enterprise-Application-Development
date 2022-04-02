import React, { useContext } from 'react'
import {UserContext,ChannelContext} from '../App'

//3rd step consuming context
 function ComponentE() {

    //creating useContext hook 
    const user =useContext(UserContext)
    const channel =useContext(ChannelContext)
   
  return (
     
    <div>{user} - {channel}
    </div>
  )
}
export default  ComponentE
