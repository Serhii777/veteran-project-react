import React from "react";
import SocialNetworks from "../SocialNetworks/SocialNetworks";

import styles from "./Address.module.css";

const Address = () => {
  return (
    <div className={styles.addressWrapper}>
      <div className={styles.addressVetProst}>
        <p className={styles.addressText}>м. Вінниця, вул. Єрусалимка, 8</p>
      </div>

      <div className={styles.scheduleWrapper}>
        <h5 className={styles.scheduleTitle}>Графік роботи</h5>
        <p className={styles.scheduleText}>
          Ми працюємо щоденно з понеділка по пятницю
        </p>
        <span className={styles.scheduleText}>
          Години роботи: з 9.00 до 18.00
        </span>
      </div>

      <div className={styles.contactsListWrapper}>
        <h5 className={styles.contactsListTitle}>Наші контактні дані:</h5>
        <ul className={styles.contactsList}>
          <li className={styles.contactsItem}>
            <span>&#x2709;</span>
            <a
              href="mailto:vtprostir.vn@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactsLink}>
              vtprostir.vn@gmail.com
            </a>
          </li>
          <li className={styles.contactsItem}>
            <span>&#x260e;</span>
            <a href="tel:+380679594065" className={styles.contactsLink}>
              +38 (067) 959 40 65
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.socialNetworksWrapper}>
        <h5 className={styles.socialNetworksTitle}>Ми в соціальних мережах:</h5>
        <SocialNetworks />
      </div>
    </div>
  );
};

export default Address;
