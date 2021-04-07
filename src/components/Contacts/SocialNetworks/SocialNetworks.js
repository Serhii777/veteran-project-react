import React from "react";

import SvgFacebook from "../SvgFacebook";
import SvgViber from "../SvgViber";

import styles from "./SocialNetworks.module.css";

const SocialNetworks = () => {
  return (
    <div className={styles.socialNetworksListWrapper}>
      <ul className={styles.socialNetworksList}>
        <li className={styles.socialNetworksItem}>
          <a
            href="#"
            //   target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialNetworksLink} ${styles.linkFacebook}`}>
            <div className={styles.socialNetworksItemWrapper}>
              <SvgFacebook />
            </div>

            <span className={styles.visuallyHidden}>Facebook</span>
          </a>
        </li>

        <li className={styles.socialNetworksItem}>
          <a
            href="#"
            //   target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialNetworksLink} ${styles.linkViber}`}>
            <div className={styles.socialNetworksItemWrapper}>
              <SvgViber />
            </div>
            <span className={styles.visuallyHidden}>Viber</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialNetworks;
