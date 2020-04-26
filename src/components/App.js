import React from 'react';
import './AppGlobal.css';
import './App.css';

const App = () => {
  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img
            src={require('../assets/logo.svg')}
            className="App-logo"
            alt="logo"
          />
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
    </React.StrictMode>
  );
};

export default App;
