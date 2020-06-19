import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import Clue from "./components/Clue";
//import { ShowClue } from "./components/ShowClue";

class App extends React.Component {
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <Clue />
      </div>
    );
  }
}

export default App;
