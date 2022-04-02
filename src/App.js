import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC';

//1st step
export const UserContext= React.createContext()
export const ChannelContext= React.createContext()

function App() {
  return (
    <UserContext.Provider value={'Ayesha'}>
    <ChannelContext.Provider value={'codewithme'}>
      <ComponentC/>
   </ChannelContext.Provider>
 </UserContext.Provider>
  );
}

export default App;
