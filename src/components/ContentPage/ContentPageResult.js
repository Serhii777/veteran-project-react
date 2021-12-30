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
import useFetch from "../../services/useFetchObserver";

import { IMAGES_URL } from "../../services/apiUrl";

import { store } from "react-notifications-component";
import styles from "./ContentPageAnnounNews.module.css";

const ContentPageResult = ({
  onTitle,
  SvgContent,
  onGetAllItems,
  onDeleteItem,
  URL,
}) => {
  const auth = useContext(authContext);

  const mounted = useRef(true);
  const loader = useRef(null);

  const [alert, setAlert] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [query, setQuery] = useState("");
  let [page, setPage] = useState(0);

  let pageSize = 1;

  const getRequestParams = (page, pageSize) => {
    let params = {};

    if (page) {
      params["pageNum"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };
  const params = getRequestParams(page, pageSize);

  let { loading, error, errorText, list, count } = useFetch(
    query,
    params.pageNum,
    params.size,
    URL
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleObserver = useCallback((entries) => {
    const target = entries[0];

    if (page <= count && target.isIntersecting) {
      setPage((prev) => (page <= count ? prev + 1 : prev));
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "150px",
      threshold: [0.1, 0.5, 1.0],
      // threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  const removeItem = (itemId) => {
    let answer = window.confirm(
      "Ви дійсно хочете видалити цей об'єкт? Подумайте ще раз, адже відновити його вже буде неможливо!"
    );

    if (answer) {
      onDeleteItem(URL, itemId).then((items) => {
        if (mounted.current) {
          setListItem(items);
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

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

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
            <input type="text" value={query} onChange={handleChange} />
            <ul className={styles.сontentPageList}>
              {list && list.length > 0
                ? list.map((item, index) => (
                    <li
                      key={item.id}
                      className={
                        auth.isAuthenticated
                          ? `${styles.сontentPageItem} ${styles.сontentPageItemHover}`
                          : styles.сontentPageItem
                      }>
                      <div className={styles.сontentPageItemWrapper}>
                        <span className={styles.сontentPageItemNumber}>
                          {index + 1}
                        </span>
                        {item.date ? (
                          <h3 className={styles.сontentPageItemDate}>
                            {item.date !== undefined
                              ? new Date(item.date).toLocaleDateString(
                                  "Uk-uk",
                                  options
                                )
                              : null}
                          </h3>
                        ) : null}
                      </div>
                      <div className={styles.сontentItemWrapper}>
                        {item.title ? (
                          <h3 className={styles.сontentPageItemTitle}>
                            {item.title}
                          </h3>
                        ) : null}

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
                                        `${IMAGES_URL}/` +
                                        `${item.image}`
                                          .split("")
                                          .slice(12)
                                          .join("")
                                      }
                                      alt="Изображение с сервера."
                                      className={styles.imageContent}
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
                : null}
            </ul>
            {loading && (
              <div className={styles.spinnerWrapper}>
                <Spinner type="Bars" color="#076702" height={40} width={80} />
              </div>
            )}
            {error && (
              <div className={styles.errorWrapper}>
                <div className={styles.errorInfo}>Error!</div>
                <p className={styles.errorText}>{errorText}</p>
              </div>
            )}
            <div ref={loader} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContentPageResult;
