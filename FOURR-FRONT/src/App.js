import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTrashAlt)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
