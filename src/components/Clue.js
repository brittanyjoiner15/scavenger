import React, {useState} from "react";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import "../App.css";
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from "@elastic/eui";

import Form from "./Form";

import jsonData from "../clues.json";

import "@elastic/eui/dist/eui_theme_light.css";

const Clue = (props) => {
  const [id, setId] = useState(0);
  console.log(id);
  const clue = jsonData.Clues[id];

  const rightAnswer = clue.rightAnswer;

  const checkAnswer = (e) => {
    e.preventDefault();
    const form = e.target;
    const submittedAnswer = e.target.elements.submittedAnswer.value
      .toLowerCase()
      .trim();
    if (submittedAnswer === rightAnswer) {
      setId(id + 1);
      form.reset();
      window.scrollTo(0, 0);
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

  const completed = id * 100 / (jsonData.Clues.length - 1);
  console.log(completed);

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
                  <span style={labelStyles}>{`${completed}%`}</span>
                </div>
              </div>
              <EuiTitle>
                <h2>{clue.name}</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <div className="clueBox">
              <img
                  src={clue.image}
                  width="100%"
                  alt={clue.name}
                  className="responsive"
              />
              <EuiSpacer/>
              <p>{clue.riddle}</p>
              <EuiSpacer/>
              {
                id < jsonData.Clues.length - 2 ? (
                    <Form checkAnswer={checkAnswer} clue={clue}/>
                ) : null
              }
              <hr/>
              <EuiSpacer/>
              <EuiText size="m">
                <em>You are here.</em>
              </EuiText>
              <EuiSpacer/>
              <Map
                  google={props.google}
                  zoom={15}
                  initialCenter={clue.geo}
                  center={clue.geo}
                  style={style}
                  disableDefaultUI={true}
              >
                <Marker position={clue.geo}/>
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
