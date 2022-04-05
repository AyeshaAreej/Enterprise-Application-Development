import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Inputimage from './grayscale/inputimage';

function App() {
  return (
    <div className="App">
    <Inputimage/>
     <ClickCounter/>
     <HoverCounter/>
    </div>
  );
}

export default App;
