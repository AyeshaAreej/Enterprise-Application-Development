import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import User from './User';
import Counter from './Counter';
import MyCounter from './MyCounter';


function App() {
  return (
    <div className="App">

    <MyCounter initial={5}/>
    {/* <ClickCounter/>
    <HoverCounter/> 
    <User name={(isLoggedIn)=> isLoggedIn ? "Ayesha" : "Guest  "}/>  */}
    

    {/* Counter functionality using render props */}
    <Counter render={(count,incrementCount )=>  (
    <ClickCounter count={count} incrementCount={incrementCount}/> 
    )} />

    <Counter render={(count,incrementCount )=> (
    <HoverCounter count={count} incrementCount={incrementCount}/> 
    )} />
    
    </div>   
  );
}

export default App;
