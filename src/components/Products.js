import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
   <input type='search' placeholder='Search Products'/>
     <nav>
       <Link to='featured '>Featured</Link>
       <Link to='New'>New</Link>
     </nav>
     <Outlet/>
    </div>
  )
}
