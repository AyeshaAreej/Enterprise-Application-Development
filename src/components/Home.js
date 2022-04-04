import React from 'react'
import { useNavigate } from 'react-router-dom'
 
function Home() {
  const navigate=useNavigate()

  //1st way
  // function goOrderConfirm()
  // {
  //   navigate('order-summary')
  // }
  return (
    <div>Home
    <button onClick={()=>navigate('order-summary', {replace:true})}>Place Order</button>
    </div>
  )
}

export default Home