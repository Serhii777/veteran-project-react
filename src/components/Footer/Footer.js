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
// import SvgLocation from "./SvgLocation";
import SvgLocation2 from "../SvgComponents/SvgLocation2";

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

  // const removeItem = useCallback(
  //   (itemId) => {
  //     deleteFooteritems(itemId).then((items) => {
  //       if (mounted.current) {
  //         setFooteritems(items);
  //         setAlert(true);

  //         store.addNotification({
  //           title: "Wonderful!",
  //           type: "success",
  //           message: "Блок успішно видалено.",
  //           container: "top-left",
  //           animationIn: ["animate__animated animate__zoomIn"],
  //           animationOut: ["animate__animated animate__zoomOut"],
  //           dismiss: {
  //             duration: 3000,
  //             onScreen: true,
  //             showIcon: true,
  //           },
  //         });
  //       }
  //     });
  //   },
  //   [setFooteritems]
  // );

  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <h3 className={styles.footerTitle}>
          Зустрінемо. Вислухаємо. Допоможемо
        </h3>

        <ul className={styles.footerContentWrapper}>
          <li className={`${styles.itemWrapper} ${styles.addressListWrapper}`}>
            <h5 className={`${styles.itemTitle} ${styles.addressTitle}`}>
              Наша адреса:
            </h5>
            <div className={styles.addressTextWrapper}>
              <div className={styles.svgLocationWrapper}>
                {/* <SvgLocation /> */}
                <SvgLocation2 />
              </div>
              <p className={styles.addressText}>
                {/* <span className={styles.footerSpan}></span> */}
                м. Вінниця, вул. Єрусалимка, 8
              </p>
            </div>

            <div className={styles.scheduleWrapper}>
              <h5 className={styles.itemTitle}>Графік роботи:</h5>
              <p className={styles.scheduleText}>
                <span className={styles.contactsSpan}>
                  <i class="far fa-calendar-alt"></i>
                </span>
                <span className={styles.contactsTime}>
                  {" "}
                  з понеділка по пятницю{" "}
                </span>
              </p>
              <p className={styles.scheduleText}>
                <span className={styles.contactsSpan}>
                  <i class="far fa-clock"></i>
                </span>
                <span className={styles.contactsTime}> з 9.00 до 18.00 </span>
              </p>
            </div>
          </li>

          <li className={`${styles.itemWrapper} ${styles.contactsListWrapper}`}>
            <h5 className={styles.itemTitle}>Наші контактні дані:</h5>
            <ul className={styles.contactsList}>
              <li className={styles.contactsItem}>
                {/* <span className={styles.contactsSpan}>&#128386;</span> */}
                <span className={styles.contactsSpan}>&#x2709;</span>
                <a
                  href="mailto:vtprostir.vn@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactsLink}>
                  vtprostir.vn@gmail.com
                </a>
              </li>
              <li className={styles.contactsItem}>
                <span className={styles.contactsSpan}>&#x260e;</span>
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
      {auth.isAuthenticated ? (
        <div className={styles.formAttentionWrapper}>
          <FormFooter onCreateItem={createContent} />
        </div>
      ) : null}
    </div>
  );
};

export default Footer;
