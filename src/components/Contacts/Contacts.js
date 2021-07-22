import React from "react";
import Address from "./Address/Address";
import WrapperdMap from "../Map/Map";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// import SvgResult from "../SvgComponents/SvgResult";


import styles from "./Contacts.module.css";

const Contacts = () => {
  // console.log("11111", process.env.REACT_APP_GOOGLE_MAP_KEY);

  return (
    <div className={styles.contacts}>
      <div className={styles.сontentPageTitleWrapper}> 
        {/* <div className={styles.svgWrapper}> */}
          {/* <SvgResult /> */}
        {/* </div> */}

        <h2 className={styles.contactsTitle}>Наші контакти</h2>
      </div>

      <div className={styles.contactsWrapper}>
        <div className={styles.addressSection}>
          <h4 className={`${styles.itemTitle} ${styles.addressTitle}`}>
            Чекаємо Вас за адресою:
          </h4>
          <div className={styles.addressWrapper}></div>
          <Address />
        </div>

        <div className={styles.mapSection}>
          <h4 className={`${styles.itemTitle} ${styles.mapTitle}`}>
            Наше місцезнаходження:
          </h4>
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
