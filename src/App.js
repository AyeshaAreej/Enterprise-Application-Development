import { useState } from 'react';
import React  from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  
  return (
    <div >
      <Welcome  />
     <Greet/>
    </div>
  );
}

export default App;
