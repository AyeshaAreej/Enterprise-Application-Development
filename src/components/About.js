import React from 'react'
import {useNavigate} from 'react-router-dom'

function About() {
    //useNavigate Hook
    const navigate=useNavigate()
    function goHome(){
        navigate('/')
    }
  return (
    <div><h1>About</h1>
    <button onClick={goHome}>Go Home</button>
    </div>
  )
}

export default About