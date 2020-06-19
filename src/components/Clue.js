import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "../App.css";
import {
  EuiBetaBadge,
  EuiButton,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from "@elastic/eui";

import jsonData from "../clues.json";

import "@elastic/eui/dist/eui_theme_light.css";

const Clue = (props) => {
  const [id, setId] = useState(0);

  const clue = jsonData.Clues[id];

  const rightAnswer = clue.rightAnswer;

  const checkAnswer = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(id);
    const submittedAnswer = e.target.elements.submittedAnswer.value.toLowerCase();
    if (submittedAnswer === rightAnswer) {
      setId(id + 1);
      form.reset();
      if (id === jsonData.Clues.length - 2) {
        document.getElementById("guess").classList.add("hide");
        document.getElementById("hintBox").classList.add("hide");
        document.getElementById("answer").classList.add("hide");
      }
    } else {
      window.alert("Try again");
    }
  };
  const style = {
    width: "300px",
    height: "300px",
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>{clue.name}</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <div className="clueBox">
              <img src={clue.image} width="100%" alt={clue.name} />
              <EuiSpacer />
              <p>{clue.riddle}</p>
              <EuiSpacer />
              <form id="guess" onSubmit={checkAnswer}>
                <EuiFieldText
                  placeholder="Type your answer here"
                  aria-label="Type your answer here"
                  name="submittedAnswer"
                />
                <EuiSpacer />
                <EuiButton fill type="submit">
                  Submit
                </EuiButton>
              </form>
              <EuiSpacer />
              <EuiTitle
                id="hintBox"
                onClick={() => window.alert(clue.hint)}
                size="xxs"
              >
                <h3>
                  <EuiBetaBadge
                    className="hint"
                    label="Lab"
                    iconType="beaker"
                  />
                  Need a hint?
                </h3>
              </EuiTitle>
              <EuiSpacer />

              <EuiTitle
                id="answer"
                onClick={() => window.alert(clue.rightAnswer)}
                size="xxs"
              >
                <h3>
                  <EuiBetaBadge
                    className="hint"
                    label="Lab"
                    iconType="beaker"
                  />
                  I am stumped. Give me the answer.
                </h3>
              </EuiTitle>
              <EuiSpacer />
              <EuiSpacer />

              <Map
                google={props.google}
                zoom={15}
                initialCenter={{ lat: clue.lat, lng: clue.lng }}
                center={{ lat: clue.lat, lng: clue.lng }}
                style={style}
              >
                <Marker />
              </Map>
            </div>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
      <EuiSpacer />
    </EuiPage>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA34Sx4XIV4g2YZrSve-RDkU7Uzva-trf8",
})(Clue);
