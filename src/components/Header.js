import React from "react";
import "../App.css";
import "@elastic/eui/dist/eui_theme_light.css";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="top">Scavenger Hunt</h1>
      </div>
    );
  }
}
