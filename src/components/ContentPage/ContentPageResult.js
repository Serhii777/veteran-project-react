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

  // loading, error, errorText, list, count
  // console.log("loading:", loading);
  // console.log("error:", error);

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
      "???? ???????????? ???????????? ???????????????? ?????? ????'??????? ?????????????????? ???? ??????, ???????? ?????????????????? ???????? ?????? ???????? ??????????????????!"
    );

    if (answer) {
      onDeleteItem(URL, itemId).then((items) => {
        if (mounted.current) {
          setListItem(items);
          setAlert(true);

          store.addNotification({
            title: "Wonderful!",
            type: "success",
            message: "???????? ?????????????? ????????????????.",
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
      <div className={styles.??ontentPage}>
        <div className={styles.??ontentPageTitleWrapper}>
          <div className={styles.svgWrapper}>
            <SvgContent />
          </div>
          <h2
            className={`${styles.??ontentPageTitle} ${styles.??ontentPageTitleSocial}`}>
            {onTitle}
          </h2>
        </div>
        <div className={styles.??ontentPageWrapper}>
          <div className={styles.??ontentPageMain}>
            <input type="text" value={query} onChange={handleChange} />
            <ul className={styles.??ontentPageList}>
              {list && list.length > 0
                ? list.map((item, index) => (
                    <li
                      key={item.id}
                      className={
                        auth.isAuthenticated
                          ? `${styles.??ontentPageItem} ${styles.??ontentPageItemHover}`
                          : styles.??ontentPageItem
                      }>
                      <div className={styles.??ontentPageItemWrapper}>
                        <span className={styles.??ontentPageItemNumber}>
                          {index + 1}
                        </span>
                        {item.date ? (
                          <h3 className={styles.??ontentPageItemDate}>
                            {item.date !== undefined
                              ? new Date(item.date).toLocaleDateString(
                                  "Uk-uk",
                                  options
                                )
                              : null}
                          </h3>
                        ) : null}
                      </div>
                      <div className={styles.??ontentItemWrapper}>
                        {item.title ? (
                          <h3 className={styles.??ontentPageItemTitle}>
                            {item.title}
                          </h3>
                        ) : null}

                        <ul className={styles.??ontentPageItemList}>
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
                                      alt="?????????????????????? ?? ??????????????."
                                      className={styles.imageContent}
                                    />
                                  </div>
                                ) : null}

                                {item.link ? (
                                  <div className={styles.contentLinkWrapper}>
                                    <p className={styles.contentLinkText}>
                                      ?????????????????? ???? ??????????????:
                                    </p>
                                    <a
                                      href={item.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={styles.contentLink}>
                                      ??????????????...
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
                              ???????????????? ??????????????
                            </button>
                          </div>
                        ) : null}
                      </Fragment>
                    </li>
                  ))
                : null}
            </ul>
            {loading && error === true && (
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
