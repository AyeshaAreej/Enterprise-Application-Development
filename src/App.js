import React  from 'react';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import ConditionalWelcome from './Components/ConditionalWelcome';
import NameList from './Components/NameList';
import LifeCycleA from './Components/LifeCycleA';
import RefsDemo from './RefsDemo';
import FocusInput from './Components/FocusInput';

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
       
       {/* Approaches of event binding */}
       <EventBind/>
       {/* Passing parameters from child to parent and method from parent to child */}
       <ParentComponent/>

       {/* Conditional Rendering */}
       <ConditionalWelcome/>
       
       {/* List Rendering */}
       <NameList/>

       {/* Mounting Lifecycle Methods */}
        <LifeCycleA/>

        {/* Refs Demo */}
        <RefsDemo/>

        {/* Ref to class component */}
        <FocusInput/>
     </div>
  );
}

export default App;
