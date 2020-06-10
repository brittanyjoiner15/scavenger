import React from "react";
import jsonData from "../clues.json";

export class ShowClue extends React.Component {
  render() {
    return (
      <div className="Container mx-2">
        {jsonData.Clues.map((clue, i) => {
          return (
            <div className="row p-4 drinkBox" key={clue.id}>
              <div className="col-md-6  drinkImg">
                <img src={clue.image} width="70%" />
              </div>
              <div className="col-md-6">
                <h2>
                  <em>{clue.name}</em>
                </h2>
                <br />
                <p>{clue.riddle}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
