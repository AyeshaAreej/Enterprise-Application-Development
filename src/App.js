import './App.css';
import cat from './cat.png'
import React, { Component } from 'react'

export class App extends Component {

  render() {
    console.log(cat);
    return (
      <div>
        
       <h1>hello</h1>
       <img src={cat} alt="Logo" className='gray' />



      </div>
    )
  }
}                                                                                   

export default App