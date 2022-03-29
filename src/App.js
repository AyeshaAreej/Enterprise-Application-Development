import React  from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';

function App() {
  
  return (
    <div >
      <Welcome name="Ayesha" degree="Software Engineer" />
      <Greet name="Ayesha" degree="Software Engineer">
       <p>This is children props</p>
       </Greet>
       {/* JSX explained */}
       <Hello/>
       {/* Displaying message using state within class */}
       <Message/>
       {/* Props being passes to class component */}
       <Counter addValue='5'/>

       <EventBind/>
       <ParentComponent/>
       
    </div>
  );
}

export default App;
