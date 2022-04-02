import './App.css';
import React from 'react';
import ComponentC from './components/ComponentC'



// step 1 create conytext
export const UserContext= React.createContext()
function App() {
  return (
    <div>
      {/* 2nd step we need to provide it  value and provide must wrap the child components  */}
      <UserContext.Provider value={'ayesha'}>
      <ComponentC/>
      </UserContext.Provider>
      </div>
  );
}

export default App;
