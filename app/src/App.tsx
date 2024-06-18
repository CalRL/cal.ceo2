import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainComponent } from "./components/MainComponent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainComponent />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
