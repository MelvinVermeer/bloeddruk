import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

async function getAllTasks() {
  const response = await fetch("/api/GetLocations?name=Melvin");
  return await response.text();
}

function App() {
  const [message, setMessage] = useState("");

  getAllTasks().then((x) => setMessage(x));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {message ? <pre>{message}</pre> : <pre>loading...</pre>}

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
