import './App.css';
import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';

import {Products}  from './components/Products';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';  
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';

export class App extends Component {
  render() {
    return (
      <div>
        
           <Navbar/>
           <Routes> 
           <Route exact path='/' element={<Home/>} />
           <Route  path='about' element={<About/>} />
           <Route  path='order-summary' element={<OrderSummary/>} />
           <Route  path='users' element={<Users/>} />
           <Route  path='users/:userId' element={<UserDetails/>} />
           
           <Route  path='products' element={<Products/>} > 
         
         
           <Route index element={<FeaturedProducts/>}/>         
           <Route  path='featured' element={<FeaturedProducts/>}/>
           <Route  path='new' element={<NewProducts/>}/>
           
           </Route>
           <Route path='*' element={<NoMatch/>}/>
           </Routes>


      </div>
    )
  }
}

export default App