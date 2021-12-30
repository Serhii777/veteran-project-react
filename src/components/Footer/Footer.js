import React from "react";

import SocialNetworks from "../Contacts/SocialNetworks/SocialNetworks";
import SvgLocationBlack from "../SvgComponents/SvgLocationBlack";
import SvgCalendar from "../SvgComponents/SvgCalendar";
import SvgClock from "../SvgComponents/SvgClock";
import SvgEnvelopEmail from "../SvgComponents/SvgEnvelopEmail";
import SvgPhoneSound from "../SvgComponents/SvgPhoneSound";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h3 className={styles.footerTitle}>
          Зустрінемо. Вислухаємо. Допоможемо
        </h3>

        <ul className={styles.footerContentWrapper}>
          <li className={`${styles.itemWrapper} ${styles.addressListWrapper}`}>
            <div className={styles.scheduleWrapper}>
              <h5 className={`${styles.itemTitle} ${styles.addressTitle}`}>
                Наша адреса:
              </h5>
              <div className={styles.addressTextWrapper}>
                <div className={styles.svgLocationWrapper}>
                  <SvgLocationBlack />
                </div>
                <p className={styles.addressText}>
                  м. Вінниця, вул. Єрусалимка, 8
                </p>
              </div>
            </div>
          </li>

          <li className={`${styles.itemWrapper} ${styles.scheduleListWrapper}`}>
            <div className={styles.scheduleWrapper}>
              <h5 className={styles.itemTitle}>Графік роботи:</h5>
              <div className={styles.addressTextWrapper}>
                <div className={styles.svgLocationWrapper}>
                  <SvgCalendar />
                </div>
                <span className={styles.contactsTime}>
                  з понеділка по пятницю
                </span>
              </div>
              <div className={styles.addressTextWrapper}>
                <div className={styles.svgLocationWrapper}>
                  <SvgClock />
                </div>
                <span className={styles.contactsTime}>
                  {" "}
                  з 9.00 до 18.00 (20.00)
                </span>
              </div>
            </div>
          </li>

          <li className={`${styles.itemWrapper} ${styles.contactsListWrapper}`}>
            <h5 className={styles.itemTitle}>Наші контактні дані:</h5>
            <ul className={styles.contactsList}>
              <li className={styles.contactsItem}>
                <div className={styles.svgLocationWrapper}>
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
                <div className={styles.svgLocationWrapper}>
                  <SvgPhoneSound />
                </div>
                <a href="tel:+380679594065" className={styles.contactsLink}>
                  +38 (067) 959 40 65
                </a>
              </li>
            </ul>
          </li>

          <li className={`${styles.itemWrapper} ${styles.socialListWrapper}`}>
            <h5 className={styles.itemTitle}>Ми в соціальних мережах:</h5>
            <div className={styles.socialNetworksWrapper}>
              <SocialNetworks />
            </div>
          </li>
        </ul>

        <div className={styles.footerText}>
          <div className={styles.copyrightWrapper}>
            <span className={styles.copyright}>
              Ветеранський простір &copy;
            </span>
            <p className={styles.year}>2021</p>
          </div>
          <p className={styles.text}>Усі права захищено</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
