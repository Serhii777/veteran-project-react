import React from "react";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

import SvgLocationBlack from "../../SvgComponents/SvgLocationBlack";
import SvgCalendar from "../../SvgComponents/SvgCalendar";
import SvgClock from "../../SvgComponents/SvgClock";
// import SvgLunch from "../../SvgComponents/SvgLunch";
import SvgEnvelopEmail from "../../SvgComponents/SvgEnvelopEmail";
import SvgPhoneSound from "../../SvgComponents/SvgPhoneSound";

import styles from "./Address.module.css";

const Address = () => {
  return (
    <div className={styles.addressWrapper}>
      <div className={styles.scheduleItemWrapper}>
        <div className={styles.svgWrapper}>
          <SvgLocationBlack />
        </div>
        <p className={styles.addressAndTime}>м. Вінниця, вул. Єрусалимка, 8</p>
      </div>

      <div className={`${styles.itemWrapper} ${styles.scheduleWrapper}`}>
        <h5 className={styles.itemTitle}>Графік роботи:</h5>
        <div className={styles.scheduleItemWrapper}>
          <div className={styles.svgWrapper}>
            <SvgCalendar />
          </div>
          <span className={styles.addressAndTime}>
            {" "}
            з понеділка по пятницю{" "}
          </span>
        </div>
        <div className={styles.scheduleItemWrapper}>
          <div className={styles.svgWrapper}>
            <SvgClock />
          </div>
          <span className={styles.addressAndTime}>
            {" "}
            з 9.00 до 18.00 (20.00){" "}
          </span>
        </div>
        {/* <div className={styles.scheduleItemWrapper}>
          <div className={styles.svgWrapper}>
            <SvgLunch />
          </div>
          <span className={styles.addressAndTime}> з 12.00 до 13.00 </span>
        </div> */}
      </div>

      <div className={`${styles.itemWrapper} ${styles.contactsListWrapper}`}>
        <h5 className={styles.itemTitle}>Наші контактні дані:</h5>
        <ul className={styles.contactsList}>
          <li className={styles.contactsItem}>
            <div className={styles.svgWrapper}>
              <SvgEnvelopEmail />
            </div>
            <a
              href="mailto:vtprostir.vn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactsLink}>
              vtprostir.vn@gmail.com
            </a>
          </li>
          <li className={styles.contactsItem}>
            <div className={styles.svgWrapper}>
              <SvgPhoneSound />
            </div>
            <a href="tel:+380679594065" className={styles.contactsLink}>
              +38 (067) 959 40 65
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.itemWrapper} ${styles.socialListWrapper}`}>
        <h5 className={styles.itemTitle}>Ми в соціальних мережах:</h5>
        <div className={styles.socialNetworksWrapper}>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};

export default Address;
