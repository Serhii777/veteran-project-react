import React from "react";
import Address from "./Address/Address";
import MapComponent from "./MapComponent/MapComponent";
import SvgContactUs from "../SvgComponents/SvgContactUs";
// import picture1 from '../../images/static/20210724_131303.jpg'
import picture2 from '../../images/static/20210724_131245.jpg'

import styles from "./Contacts.module.css";
import "leaflet/dist/leaflet.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contactsContainer}>
        <div className={styles.сontentPageTitleWrapper}>
          <div className={styles.svgWrapper}>
            {/* <SvgContactUsBlack /> */}
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
                  src={picture2}
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
