import React from "react";
import Address from "./Address/Address";
import WrapperdMap from "../Map/Map";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// require("dotenv").config();
// import moduleName from 'module'

import styles from "./Contacts.module.css";

const Contacts = () => {
  // console.log("11111", process.env.REACT_APP_GOOGLE_MAP_KEY);

  return (
    <div className={styles.contacts}>
      <h2 className={styles.contactsTitle}>Наші контакти</h2>
      <div className={styles.contactsWrapper}>
        <div className={styles.addressSection}>
          <h3 className={styles.addressTitle}>Чекаємо Вас за адресою:</h3>
          <div className={styles.addressWrapper}></div>
          <Address />
        </div>

        <div className={styles.mapSection}>
          <h3 className={styles.mapTitle}>Наше місцезнаходження</h3>
          <div className={styles.mapWrapper}>
            {/* map here */}
            <WrapperdMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              // containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
