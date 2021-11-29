import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import authContext from "../../services/authContext";
import Spinner from "../Spinner/Spinner";

import { store } from "react-notifications-component";
import styles from "./ContentPage.module.css";

const ContentPage = ({
  onTitle,
  SvgContent,
  onGetAllItems,
  onDeleteItem,
  URL,
  URL_IMAGES,
}) => {
  const auth = useContext(authContext);


  const [alert, setAlert] = useState(false);
  const [listItems, setListItems] = useState([]);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    if (listItems.length && !alert) {
      return;
    }

    onGetAllItems(URL).then((items) => {
      if (mounted.current && items) {
        setListItems(items);
      }
    });

    return () => (mounted.current = false);
  }, [URL, alert, listItems.length, onGetAllItems]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 100);
    }
  }, [alert]);

  const removeItem = (itemId) => {
    let answer = window.confirm(
      "Ви дійсно хочете видалити цей об'єкт? Подумайте ще раз, адже відновити його вже буде неможливо!"
    );

    if (answer) {
      onDeleteItem(URL, itemId).then((items) => {
        if (mounted.current) {
          setListItems(items);
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
          });
        }
      });
    }
  };

  useEffect(() => {
    getItems();
  }, [getItems, listItems]);

  // console.log("listItems:", listItems);

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageTitleWrapper}>
          <div className={styles.svgWrapper}>
            <SvgContent />
          </div>
          <h2
            className={`${styles.сontentPageTitle} ${styles.сontentPageTitleSocial}`}>
            {onTitle}
          </h2>
        </div>
        <div className={styles.сontentPageWrapper}>
          <div className={styles.сontentPageMain}>
            <ul className={styles.сontentPageList}>
              {listItems && listItems.length > 0 ? (
                listItems.map((item, index) => (
                  <li
                    key={item.id}
                    className={
                      auth.isAuthenticated
                        ? `${styles.сontentPageItem} ${styles.сontentPageItemHover}`
                        : styles.сontentPageItem
                    }>
                    <div className={styles.сontentPageItemWrapper}>
                      <div className={styles.сontentItemWrapper}>
                        <h3 className={styles.сontentPageItemTitle}>
                          {item.title}
                        </h3>

                        <ul className={styles.сontentPageItemList}>
                          {item.contentText.map((item) => (
                            <li key={item.id} className={styles.textItem}>
                              <div className={styles.textItemWrapper}>
                                {item.textTitle ? (
                                  <h4 className={styles.textItemTitle}>
                                    {item.textTitle}
                                  </h4>
                                ) : null}

                                <div className={styles.textWrapper}>
                                  {item.toppings ? (
                                    <span className={styles.toppings}>
                                      {item.toppings}
                                    </span>
                                  ) : null}

                                  {item.text ? (
                                    <p className={styles.text}>{item.text}</p>
                                  ) : null}
                                </div>

                                {item.image ? (
                                  <div className={styles.homeItemImageWrapper}>
                                    <img
                                      src={
                                        `${URL_IMAGES}/` +
                                        `${item.image}`
                                          .split("")
                                          .slice(12)
                                          .join("")
                                      }
                                      alt="Изображение с сервера."
                                    />
                                  </div>
                                ) : null}

                                {item.link ? (
                                  <div className={styles.contentLinkWrapper}>
                                    <p className={styles.contentLinkText}>
                                      Посилання на джерело:
                                    </p>
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={styles.contentLink}>
                                      перейти...
                                    </a>
                                  </div>
                                ) : null}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                <Fragment>
                  {setTimeout(() => {}, 500) ? (
                    <Spinner />
                  ) : (
                    <div>"Enter your data"</div>
                  )}
                </Fragment>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentPage;
