import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Clue from "./components/Clue";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Clue></Clue>
    </div>
  );
}

export default App;
