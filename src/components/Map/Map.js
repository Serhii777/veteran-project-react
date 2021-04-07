import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 49.236453, lng: 28.477148 }}>
      <Marker position={{ lat: 49.23675, lng: 28.47585 }} />
    </GoogleMap>
  );
}

const WrapperdMap = withScriptjs(withGoogleMap(Map));

export default WrapperdMap;
