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
  EuiText,
  EuiTextColor,
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
    const submittedAnswer = e.target.elements.submittedAnswer.value
      .toLowerCase()
      .trim();
    if (submittedAnswer === rightAnswer) {
      setId(id + 1);
      form.reset();
      window.scrollTo(0, 0);
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
    height: "300px",
  };

  const trackerStyle = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10,
  };

  const completed = clue.completed;

  const fillerStyle = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#00b1ac",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <div style={trackerStyle}>
                <div style={fillerStyle}>
                  <span style={labelStyles}>{`${clue.completed}%`}</span>
                </div>
              </div>
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
                <EuiFlexGroup justifyContent="spaceAround">
                  <EuiFlexItem grow={false}>
                    <EuiFieldText
                      placeholder="Type your answer here"
                      aria-label="Type your answer here"
                      name="submittedAnswer"
                    />
                  </EuiFlexItem>
                </EuiFlexGroup>
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
              <EuiText
                id="answer"
                onClick={() => {
                  const sure = window.confirm("Are you sure?");
                  if (sure === true) {
                    window.alert(clue.rightAnswer);
                  }
                }}
                size="xs"
              >
                <h3>
                  <EuiBetaBadge
                    className="hint"
                    label="Lab"
                    iconType="beaker"
                  />
                  <EuiTextColor color="warning">
                    I am stumped. Give me the answer.
                  </EuiTextColor>
                </h3>
              </EuiText>
              <EuiSpacer />
              <hr />
              <EuiSpacer />
              <EuiText size="m">
                <em>You are here.</em>
              </EuiText>
              <EuiSpacer />
              <Map
                google={props.google}
                zoom={15}
                initialCenter={{ lat: clue.lat, lng: clue.lng }}
                center={{ lat: clue.lat, lng: clue.lng }}
                style={style}
                disableDefaultUI={true}
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
