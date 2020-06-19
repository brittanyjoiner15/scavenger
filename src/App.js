import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";

import Clue from "./components/Clue";

class App extends React.Component {
  //** i need to change this to use hooks */
  /*
    const [clueId, setClueId] = useState(1);
    do i also need a state for rightAnswer?
  */

  //use length of clues to check if im on the last one.

  //** i need to make this use hooks to update on submit to take currentClueId + 1 ... if submittedAnswer = rightAnswer, else shows a message saying try again and shwos current clue again*/

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
