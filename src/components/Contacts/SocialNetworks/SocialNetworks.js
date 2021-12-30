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
            className={`${styles.socialNetworksLink} ${styles.linkFacebook} ${styles.linkSocialFooter}`}>
            <div className={styles.socialNetworksItemWrapper}>
              <SvgFacebook />
            </div>
            <span className={styles.visuallyHidden}>Facebook</span>
          </a>
        </li>

        <li className={styles.socialNetworksItem}>
          <a
            href="https://invite.viber.com/?g2=AQAlcNBtd%2F91nEzKcfTo6pMlsb0oocy7%2Btclt5LWI5UxWdjkdkQQKE7rcnxoTO55"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialNetworksLink} ${styles.linkViber} ${styles.linkSocialFooter}`}>
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
