import React from "react";
import Address from "./Address/Address";
import MapComponent from "../MapComponent/MapComponent";
import SvgContactUs from "../SvgComponents/SvgContactUs";
import "leaflet/dist/leaflet.css";

import styles from "./Contacts.module.css";

const Contacts = () => {

  return (
    <div className={styles.contacts}>
      <div className={styles.сontentPageTitleWrapper}>
        <div className={styles.svgWrapper}>
          {/* <SvgContactUsBlack /> */}
          <SvgContactUs />
        </div>

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
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
