import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";

// import Spinner from "../Spinner";

import authContext from "../../services/authContext";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchHomeitem";

import FormContent from "../Form/FormContent";
// import SvgLaws from "../SvgComponents/SvgLaws";

// import Message from "../Message/Message";

import AppUploadFile from "../Form/MainFormUploadFile/AppUploadFile";

import image1 from "../../images/rehabilitation-specialist-1624479221668.jpg";
import image2 from "../../images/150199392_234037011696938_4418853326113702292_n-1624479265986.jpg";

import { IMAGES_URL } from "../../services/apiUrl";

import { store } from "react-notifications-component";

import styles from "./HomeContent.module.css";

const HomeContent = ({ props }) => {
  const auth = useContext(authContext);

  console.log("authAdminPage:", auth);

  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);
  // const [message, setMessage] = useState("");

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    if (list.length && !alert) {
      return;
    }

    getAllItems().then((items) => {
      if (mounted.current && items) {
        setList(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, list]);

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
    // TODO: Зробити вікно підтвердження про видалення item

    let answer = window.confirm("Are you sure?");

    // setMessage("Are you sure?");

    if (answer) {
      deleteItem(itemId).then((items) => {
        if (mounted.current) {
          setList(items);
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
  //   removeItem();
  // }, []);

  // let imageName = "";

  // console.log("list:", list);

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageTitleWrapper}>
          {/* <div className={styles.svgWrapper}>
            <SvgLaws />
          </div> */}
          <h2 className={styles.сontentPageTitle}>Про наш центр</h2>
        </div>
        <div className={styles.сontentPageWrapper}>
          {/* {!error && loading && <Spinner />} */}
          <div className={styles.сontentPageMain}>
            <ul className={styles.сontentPageList}>
              {/* <li>From li</li> */}

              {list && list.length > 0 ? (
                list.map((item) => (
                  <li key={item.id} className={styles.сontentPageItem}>
                    <div className={styles.сontentItemWrapper}>
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
                                  <p className={styles.text}>{homeitem.text}</p>
                                ) : null}
                              </div>
                              {/* image: "C:\\fakepath\\10331679ed0600eef6b3d330c65c1159.png" */}
                              {homeitem.image ? (
                                <div className={styles.imageWrapper}>
                                  <img
                                    src={
                                      `${IMAGES_URL}/` +
                                      `${homeitem.image}`
                                        .split("")
                                        .slice(12)
                                        .join("")
                                    }
                                    alt="Изображение с сервера."
                                  />
                                  {/* <p>{titleImage}</p>
                                <p>{descriptionImage}</p> */}
                                </div>
                              ) : null}
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
              ) : (
                <div>"Enter your data"</div>
              )}
            </ul>
          </div>

          <div className={styles.blockImageWrapper}>
            <h3 className={styles.blockImageTitle}>Наша родзинка</h3>
            <Link to="/ourservices/rehabilitation" className={styles.imageLink}>
              <div className={styles.imageWrapper}>
                {/* <h4>Title</h4> */}
                <img
                  src={image1}
                  alt="Реабілітолог"
                  className={styles.itemImage}
                />
                <h5 className={styles.tileImage}>Реабілітолог</h5>
              </div>
            </Link>
            <Link to="/ourservices/womenclub" className={styles.imageLink}>
              <div className={styles.imageWrapper}>
                {/* <h4>Title</h4> */}
                <img
                  src={image2}
                  alt="Жіночий клуб"
                  className={styles.itemImage}
                />
                <h5 className={styles.tileImage}>Жіночий клуб</h5>
              </div>
            </Link>
          </div>
        </div>

        {auth.isAuthenticated ? (
          <div className={styles.formContentBlockWrapper}>
            <div className={styles.formContentBlockTitleWrapper}>
              <h2 className={styles.formContentBlockTitle}>
                Форми наповнення сторінки
              </h2>
            </div>

            <div className={styles.formContentWrapper}>
              <FormContent onCreateItem={createItem} />
            </div>
            <div className={styles.appUploadFileWrapper}>
              <AppUploadFile />
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default HomeContent;
