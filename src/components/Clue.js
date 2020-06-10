import React, { useState } from "react";
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
    console.log(e.target.elements.submittedAnswer.value);
    console.log(rightAnswer);
    const submittedAnswer = e.target.elements.submittedAnswer.value;
    if (submittedAnswer === rightAnswer) {
      setId(id + 1);
      form.reset();
    } else {
      window.alert("try again");
      //* set to eui banner */
    }
  };

  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent verticalPosition="center" horizontalPosition="center">
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Here is a clue</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <div className="row p-4 drinkBox">
              <div className="col-md-6  drinkImg">
                <img src={clue.image} width="10%" />
                <EuiSpacer />
                <p>{clue.riddle}</p>
                <EuiSpacer />
                <form onSubmit={checkAnswer}>
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
                <EuiTitle size="xxs">
                  <h3>
                    <EuiBetaBadge
                      onClick={() => window.alert(clue.hint)}
                      className="hint"
                      label="Lab"
                      iconType="beaker"
                    />
                    Need a hint?
                  </h3>
                </EuiTitle>
              </div>
            </div>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Clue;

//** make input received go to lowercase and trim spaces so it would match */
