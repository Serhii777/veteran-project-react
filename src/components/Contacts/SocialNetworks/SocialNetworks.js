/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import SvgFacebook from "../../SvgComponents/SvgFacebook";
import SvgViber from "../../SvgComponents/SvgViber";

import styles from "./SocialNetworks.module.css";

const SocialNetworks = () => {
  return (
      <ul className={styles.socialNetworksList}>
        <li className={styles.socialNetworksItem}>
          <a
            href="https://www.facebook.com/vtprostir"
            target="_blank"
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
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialNetworksLink} ${styles.linkViber}`}>
            <div className={styles.socialNetworksItemWrapper}>
              <SvgViber />
            </div>
            <span className={styles.visuallyHidden}>Viber</span>
          </a>
        </li>
      </ul>
  );
};

export default SocialNetworks;
