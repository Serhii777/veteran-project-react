import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import authContext from "../../../services/authContext";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchSocioadvice";
import { IMAGES_URL } from "../../../services/apiUrl";

import FormContent from "../../Form/FormContent";
import SvgGroupOfPeople from "../../SvgComponents/SvgGroupOfPeople";

import { store } from "react-notifications-component";
import styles from "./SocioAdvice.module.css";

const SocioAdvice = () => {
  const auth = useContext(authContext);

  const [alert, setAlert] = useState(false);
  const [socioadvices, setSocioadvices] = useState([]);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    if (socioadvices.length && !alert) {
      return;
    }

    getAllItems().then((items) => {
      if (mounted.current && items) {
        setSocioadvices(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, socioadvices]);

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
    let answer = window.confirm("Are you sure?");

    // setMessage("Are you sure?");

    if (answer) {
      deleteItem(itemId).then((items) => {
        if (mounted.current) {
          setSocioadvices(items);
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
  }, [getItems, socioadvices]);

  // useEffect(() => {
  //   removeItem();
  // }, [removeItem()]);

  // let imageName = "";

  console.log("socioadvices:", socioadvices);

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageTitleWrapper}>
          <div className={styles.svgWrapper}>
            <SvgGroupOfPeople />
          </div>
          <h2
            className={`${styles.сontentPageTitle} ${styles.сontentPageTitleSocial}`}>
            Соціально-правова консультація
          </h2>
        </div>
        <div className={styles.сontentPageWrapper}>
          {/* {!error && loading && <Spinner />} */}
          <div className={styles.сontentPageMain}>
            <ul className={styles.сontentPageList}>

              {socioadvices && socioadvices.length > 0 ? (
                socioadvices.map((item, index) => (
                  <li
                    key={item.id}
                    className={
                      auth.isAuthenticated
                        ? `${styles.сontentPageItem} ${styles.сontentPageItemHover}`
                        : styles.сontentPageItem
                    }>
                    <div className={styles.сontentPageItemWrapper}>
                      {/* <span className={styles.сontentPageItemNumber}>
                        {index + 1}
                      </span> */}
                      <div className={styles.сontentItemWrapper}>
                        {/* <a href={item.url}>{item.title}</a> */}
                        <h3 className={styles.сontentPageItemTitle}>
                          {item.title}
                        </h3>

                        <ul className={styles.сontentPageItemList}>
                          {item.contentText.map((item) => (
                            // console.log("psychologicalsUl222222:", item),
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
                <div>"Enter your data"</div>
              )}
            </ul>
          </div>
        </div>

        {auth.isAuthenticated ? (
          <div className={styles.formResultsWorkWrapper}>
            <FormContent onCreateItem={createItem} />
            {/* <FormLegal /> */}
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

//   const [data, setData] = useState({ hits: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "https://hn.algolia.com/api/v1/search?query=redux"
//       );

//       setData(result.data);
//     };

//     fetchData();
//   }, []);

export default SocioAdvice;
