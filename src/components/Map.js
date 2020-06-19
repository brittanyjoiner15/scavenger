import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class Location extends Component {
  render() {
    const style = {
      width: "300px",
      height: "300px",
    };
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{ lat: {35.864433}, lng: -84.083108 }}
          style={style}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyA34Sx4XIV4g2YZrSve-RDkU7Uzva-trf8",
})(Location);
