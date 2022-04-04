import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Users = () => {
  
  const [searchPrams, setSearchParams]= useSearchParams()
   const showActiveUsers = searchPrams.get('filter') ==='active'
  return (
    <div>
   <h2>User 1</h2>
   <h2>User 2</h2>
   <h2>User 3</h2>
   <div>
   <button onClick={()=>setSearchParams({filter:'active'})}>Active Users</button>
   <button onClick={()=>setSearchParams({})}>Reset Filter</button>
    </div>
  {showActiveUsers ? <h2>Showing Active User</h2> : <h2>No active users</h2>}
   </div>
  )
}
