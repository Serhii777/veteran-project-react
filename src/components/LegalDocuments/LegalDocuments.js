import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import authContext from "../../services/authContext";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchLegal";

import FormContent from "../Form/FormContent";
import SvgLaws from "../SvgComponents/SvgLaws";

// import { IMAGES_URL } from "../../services/apiUrl";

import { store } from "react-notifications-component";
import styles from "./LegalDocuments.module.css";

const LegalDocuments = () => {
  const auth = useContext(authContext);

  const [alert, setAlert] = useState(false);
  const [legalitems, setLegalitems] = useState([]);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    if (legalitems.length && !alert) {
      return;
    }

    getAllItems().then((items) => {
      console.log("items:", items);

      if (mounted.current && items) {
        setLegalitems(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, legalitems]);

  useEffect(() => {
    getItems();
  }, [getItems]);

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
          setLegalitems(items);
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

  // useEffect(() => {
  //   getItems();
  // }, [getItems]);

  // useEffect(() => {
  //   removeItem();
  // }, []);

  // let imageName = "";

  // console.log("legalitems:", legalitems);

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageTitleWrapper}>
          <div className={styles.svgWrapper}>
            <SvgLaws />
          </div>
          <h2 className={styles.сontentPageTitle}>Важливо знати</h2>
        </div>
        <div className={styles.сontentPageWrapper}>
          {/* {!error && loading && <Spinner />} */}
          <div className={styles.сontentPageMain}>
            <ul className={styles.сontentPageList}>
              {/* <li>From li</li> */}

              {legalitems && legalitems.length > 0 ? (
                legalitems.map((item, index) => (
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
                      <div className={styles.сontentItemWrapper}>
                        {/* <a href={item.url}>{item.title}</a> */}
                        <h3 className={styles.сontentPageItemTitle}>
                          {item.title}
                        </h3>
                        {/* <span>{item._id}</span> */}

                        <ul className={styles.сontentPageItemList}>
                          {item.contentText.map((homeitem) => (
                            // console.log("homeitemUl222222:", homeitem),
                            <li key={homeitem.id} className={styles.textItem}>
                              <div className={styles.textItemWrapper}>
                                {homeitem.textTitle ? (
                                  <h4 className={styles.textItemTitle}>
                                    {homeitem.textTitle}
                                  </h4>
                                ) : null}

                                <div className={styles.textWrapper}>
                                  {homeitem.toppings ? (
                                    <span className={styles.toppings}>
                                      {homeitem.toppings}
                                    </span>
                                  ) : null}

                                  {homeitem.text ? (
                                    <p className={styles.text}>
                                      {homeitem.text}
                                    </p>
                                  ) : null}
                                </div>

                                {homeitem.link ? (
                                  <div className={styles.contentLinkWrapper}>
                                    <p className={styles.contentLinkText}>
                                      Посилання на джерело:
                                    </p>
                                    <a
                                      href={homeitem.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={styles.contentLink}>
                                      деталі...
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
          <div className={styles.formLegalWrapper}>
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

export default LegalDocuments;
