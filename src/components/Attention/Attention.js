import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import authContext from "../../services/authContext";
import {
  getAttentionitems,
  deleteAttentionitem,
} from "../../services/useFetchAttention.js";

import SvgBellBlack from "../SvgComponents/SvgBellBlack";
// import SvgBellBlackSound from "../SvgComponents/SvgBellBlackSound";


import FormAttention from "../Form/FormAttention";

import { store } from "react-notifications-component";
import styles from "./Attention.module.css";

const Attention = () => {
  const auth = useContext(authContext);

  const [alert, setAlert] = useState(false);
  const [attentionitems, setAttentionitems] = useState(null);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    // if (headeritems.length && !alert) {
    if (attentionitems && !alert) {
      return;
    }

    getAttentionitems().then((items) => {
      if (mounted.current && items) {
        setAttentionitems(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, attentionitems]);

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

  const removeItem = useCallback(
    (itemId) => {
      deleteAttentionitem(itemId).then((items) => {
        if (mounted.current) {
          setAttentionitems(items);
          setAlert(true);

          store.addNotification({
            title: "Wonderful!",
            type: "success",
            message: "Блок успішно видалено.",
            container: "top-left",
            animationIn: ["animate__animated animate__zoomIn"],
            animationOut: ["animate__animated animate__zoomOut"],
            dismiss: {
              duration: 3000,
              onScreen: true,
              showIcon: true,
            },
            //  slidingExit: {
            //   duration: 800,
            //   timingFunction: 'ease-out',
            //   delay: 0
            // }
            // touchSlidingExit: {
            //   swipe: {
            //     duration: 400,
            //     timingFunction: 'ease-out',
            //     delay: 0,
            //   },
            //   fade: {
            //     duration: 400,
            //     timingFunction: 'ease-out',
            //     delay: 0
            //   }
            // }
          });
        }
      });
    },
    [setAttentionitems]
  );

  return (
    <div className={styles.attention}>
      <div className={styles.attentionTitleWrapper}>
        <div className={styles.svgWrapper}>
          <SvgBellBlack />
          {/* <SvgBellBlackSound /> */}
        </div>
        <h3 className={styles.attentionTitle}>Увага! Термінова інформація!</h3>
      </div>

      <ul className={styles.attentionitemList}>
        {attentionitems && attentionitems.length > 0 ? (
          attentionitems.map((item) => (
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
                  <p className={styles.attentionText}>
                    {item.text}
                    <Link
                      to="/announcementnews/announcement"
                      className={styles.attentionLink}>
                      <span className={styles.attentionSpan}>Читати далі</span>
                    </Link>
                  </p>
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
      </ul>

      {auth.isAuthenticated ? (
        <div className={styles.formAttentionWrapper}>
          <FormAttention />
        </div>
      ) : null}
    </div>
  );
};

export default Attention;
