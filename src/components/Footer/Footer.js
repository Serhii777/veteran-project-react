import React, {
  // Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import authContext from "../../services/authContext";
import {
  createContent,
  getContent,
  // deleteFooteritems,
} from "../../services/useFetchContact";

import FormFooter from "../Form/FormFooter";
import SocialNetworks from "../Contacts/SocialNetworks/SocialNetworks";

import SvgLocationBlack from "../SvgComponents/SvgLocationBlack";
import SvgCalendar from "../SvgComponents/SvgCalendar";
import SvgClock from "../SvgComponents/SvgClock";
import SvgEnvelopEmail from "../SvgComponents/SvgEnvelopEmail";
import SvgPhoneSound from "../SvgComponents/SvgPhoneSound";

// import SvgLocation from "./SvgLocation";
// import SvgLocation2 from "../SvgComponents/SvgLocation2";

// import { store } from "react-notifications-component";
import styles from "./Footer.module.css";

const Footer = () => {
  const auth = useContext(authContext);

  const [alert, setAlert] = useState(false);
  const [footeritems, setFooteritems] = useState(null);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    // if (headeritems.length && !alert) {
    if (footeritems && !alert) {
      return;
    }

    getContent().then((items) => {
      if (mounted.current && items) {
        setFooteritems(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, footeritems]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 100);
    }
  }, [alert]);

  useEffect(() => {
    getItems();
  }, [getItems]);

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
                <span className={styles.contactsTime}> з 9.00 до 18.00 </span>
              </div>
            </div>
          </li>

          <li className={`${styles.itemWrapper} ${styles.contactsListWrapper}`}>
            <h5 className={styles.itemTitle}>Наші контактні дані:</h5>
            <ul className={styles.contactsList}>
              <li className={styles.contactsItem}>
                <div className={styles.svgLocationWrapper}>
                  {/* <SvgEnvelop /> */}
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

        {/* <div>Kнопка наверх</div> */}

        {/* <ul className={styles.attentionitemList}>
          {footeritems && footeritems.length > 0 ? (
            footeritems.map((item) => (
              // console.log("stateListUl11111111:", item),
              <li key={item._id} className={styles.attentionitemItem}>
                <div className={styles.attentionNoteWrapper}>
                  {item.title ? (
                    <h4 className={styles.attentionNoteTitle}>{item.title}</h4>
                  ) : null}
                  {item.description ? (
                    <p className={styles.attentionDescription}>
                      {item.description}
                    </p>
                  ) : null}
                  {item.text ? (
                    <p className={styles.attentionText}>{item.text}</p>
                  ) : null}
                </div>
                <Fragment>
                  {auth.isAuthenticated ? (
                    <div className={styles.buttonWrapper}>
                      <button
                        onClick={() => removeItem(item._id)}
                        className={styles.buttonRemove}>
                        Видалити елемент
                      </button>
                    </div>
                  ) : null}
                </Fragment>
              </li>
            ))
          ) : (
            <div>"Enter your data"</div>
          )}
        </ul> */}
      </div>
      {/* {auth.isAuthenticated ? (
        <div className={styles.formAttentionWrapper}>
          <FormFooter onCreateItem={createContent} />
        </div>
      ) : null} */}
    </div>
  );
};

export default Footer;
