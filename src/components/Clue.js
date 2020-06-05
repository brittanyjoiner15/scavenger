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

import "@elastic/eui/dist/eui_theme_light.css";

const Clue = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
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
            <p>here a image</p>
            <EuiSpacer />
            <p>here a riddle</p>
            <EuiSpacer />
            <form>
              <EuiFieldText
                placeholder="Placeholder text"
                value={value}
                onChange={(e) => onChange(e)}
                aria-label="Use aria labels when no actual label is in use"
              />
              <EuiSpacer />
              <EuiButton fill onClick={() => window.alert("Button clicked")}>
                Submit
              </EuiButton>
            </form>
            <EuiSpacer />
            <EuiTitle size="xsxs">
              <h3>
                <EuiBetaBadge
                  onClick={() => window.alert("Badge clicked")}
                  className="hint"
                  label="Lab"
                  iconType="beaker"
                />
                Need a hint?
              </h3>
            </EuiTitle>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Clue;
