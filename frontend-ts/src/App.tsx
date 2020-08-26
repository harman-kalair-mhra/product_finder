import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface HeaderProps {
  agency: string;
}

function Header(props: HeaderProps) {
  return <h1>Product Finder {props.agency}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header agency="MHRA" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
