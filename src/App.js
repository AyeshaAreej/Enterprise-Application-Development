import React  from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  
  return (
    <div >
      <Welcome name="Ayesha" />
     <Greet name="Ayesha">
       <p>This is children props</p>
     </Greet>
     <Hello/>
    </div>
  );
}

export default App;
