import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

import authContext from "../../services/authContext";

import { getHeaderitem, deleteHeaderitem } from "../../services/useFetchHeader";

import FormHeader from "../Form/FormHeader";

import { store } from "react-notifications-component";
import styles from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  const auth = useContext(authContext);

  const [alert, setAlert] = useState(false);
  const [headeritems, setHeaderitems] = useState(null);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    // if (headeritems.length && !alert) {
    if (headeritems && !alert) {
      return;
    }

    getHeaderitem().then((items) => {
      if (mounted.current && items) {
        setHeaderitems(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, headeritems]);

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
      deleteHeaderitem(itemId).then((items) => {
        if (mounted.current) {
          setHeaderitems(items);
          setAlert(true);

          store.addNotification({
            title: "Wonderful!",
            type: "success",
            message: "Блок успішно видалено.",
            container: "top-left",
            animationIn: ["animate__animated animate__zoomIn"],
            animationOut: ["animate__animated animate__zoomOut"],
            // slidingExit: {
            //   duration: 800,
            //   timingFunction: 'ease-out',
            //   delay: 0
            // }
            dismiss: {
              duration: 3000,
              onScreen: true,
              showIcon: true,
            },
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
    [setHeaderitems]
  );

  // useEffect(() => {
  //   removeItem();
  // }, [removeItem]);

  // console.log("headeritemsHeaderTitle:", headeritems);

  return (
    <div className={styles.blockHeaderitemWrapper}>
      <ul className={styles.headeritemList}>
        {headeritems && headeritems.length > 0 ? (
          headeritems.map((item) => (
            <li key={item._id} className={styles.headeritemItem}>
              <div className={styles.headeritemWrapper}>
                {item.title ? (
                  <h4 className={styles.headeritemTitle}>{item.title}</h4>
                ) : null}
                {item.description ? (
                  <p className={styles.headeritemDescription}>
                    {item.description}
                  </p>
                ) : null}
                {item.text ? (
                  <p className={styles.headeritemText}>{item.text}</p>
                ) : null}
              </div>
              {/* <Fragment>
                    {auth.isAuthenticated ? (
                      <div className={styles.buttonWrapper}>
                        <button
                          onClick={() => removeItem(item._id)}
                          className={styles.buttonRemove}>
                          Видалити елемент
                        </button>
                      </div>
                    ) : null}
                  </Fragment> */}
            </li>
          ))
        ) : (
          <div>"Enter your data"</div>
        )}
      </ul>

      {auth.isAuthenticated ? (
        <div className={styles.formHeaderWrapper}>
          <FormHeader />
        </div>
      ) : null}
    </div>
  );
};

export default HeaderTitle;
