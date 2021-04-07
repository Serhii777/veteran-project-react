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
      <h2>Наші контакти</h2>
      <div className={styles.contactsWrapper}>
        <div className={styles.addressWrapper}>
          <h3>Чекаємо Вас за адресою:</h3>
          <Address />
        </div>

        <div className={styles.mapWrapper}>
          <h3>Наше місцезнаходження</h3>
          {/* map here */}
          <WrapperdMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            // containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83366.18447061717!2d28.399593718365026!3d49.23482492043007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472d5b65195a6489%3A0xcbd4e159eedd74fe!2z0JLRltC90L3QuNGG0Y8sINCS0ZbQvdC90LjRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMjEwMDA!5e0!3m2!1suk!2sua!4v1617466516056!5m2!1suk!2sua"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"></iframe> */}
      </div>
    </div>
  );
};

export default Contacts;
