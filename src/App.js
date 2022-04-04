import './App.css';
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import About from './components/About';
import OrderSummary from './components/OrderSummary';

export class App extends Component {
  render() {
    return (
      <div>
        
           <Navbar/>
           <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route  path='about' element={<About/>} />
           <Route  path='order-summary' element={<OrderSummary/>} />
           </Routes>


      </div>
    )
  }
}

export default App