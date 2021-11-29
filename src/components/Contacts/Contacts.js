import React from "react";
import Address from "./Address/Address";
import MapComponent from "./MapComponent/MapComponent";
import SvgContactUs from "../SvgComponents/SvgContactUs";
import picture1 from "../../images/static/20211005_154431-1635369120160.jpg";

import styles from "./Contacts.module.css";
import "leaflet/dist/leaflet.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.сontentPageTitleWrapper}>
          <div className={styles.svgWrapper}>
            <SvgContactUs />
          </div>

          <h2 className={styles.contactsTitle}>Наші контакти</h2>
        </div>

        <div className={styles.contactsWrapper}>
          <div className={styles.contactsImageWrapper}>
            <div className={styles.addressSection}>
              <h4 className={`${styles.itemTitle} ${styles.addressTitle}`}>
                Чекаємо Вас за адресою:
              </h4>
              <div className={styles.addressWrapper}></div>
              <Address />
            </div>

            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <img
                  src={picture1}
                  alt="background"
                  className={styles.picture}
                />
              </div>
            </div>
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
    </div>
  );
};

export default Contacts;
