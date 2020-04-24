import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      const response = await fetch('/ping').then( res => res.text() );
      setFetchedData(response);
      console.log(response);
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-stack">
          <div className="App-logo logo-express"></div>
          <span>&#43;</span>
          <img src={logo} className="App-logo logo-react" alt="logo" />
        </div>
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
        <div className="App-response">
          <p>Server responded with</p>
          <pre>{fetchedData}</pre>
        </div>

      </header>
    </div>
  );
}

export default App;
