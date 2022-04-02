import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>

        <UserProvider value="Ayesha">
          <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}

export default App