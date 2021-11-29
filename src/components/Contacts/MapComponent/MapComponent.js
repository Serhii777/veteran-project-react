import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

import { redMarker } from "../../../services/pointerIcon";
import {
  defaultMapState,
  attribution,
  tileUrl,
} from "../../../services/mapUtils";
import "leaflet/dist/leaflet.css";
import styles from "./MapComponent.module.css";

const MapComponent = () => {
  return (
    <MapContainer
      center={[defaultMapState.lat, defaultMapState.lng]}
      zoom={defaultMapState.zoom}
      minZoom={defaultMapState.minZoom}
      className={styles.mapContainer}
      updateWhenZooming={false}
      updateWhenIdle={true}
      preferCanvas={true}>
      <TileLayer attribution={attribution} url={tileUrl} />
      <Marker
        position={[defaultMapState.lat, defaultMapState.lng]}
        icon={redMarker}
        key={defaultMapState.id}>
        <Tooltip
          minWidth={350}
          direction="bottom"
          offset={[0, 8]}
          closeButton={false}
          className={styles.tooltipCustom}>
          <div className={styles.popupCardWrapper}>
            <h4 className={styles.popupCardTitle}>Ми знаходимось тут.</h4>
            <div className={styles.popupCardText}>
              Наша адреса:{" "}
              <span className={styles.popupCardSpan}>
                м. Вінниця, вул. Єрусалимка, 8.
              </span>
            </div>
          </div>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
