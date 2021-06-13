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

// import { Form, Field } from "react-final-form";
// import arrayMutators from "final-form-arrays";
// import { FieldArray } from "react-final-form-arrays";

import authContext from "../../services/authContext";
import {
  getAllItems,
  // createItem,
  // createImage,
  deleteItem,
} from "../../services/useFetchArray";

// TODO: Розкидати по файлам та зробити імпортиrmAdmin/FormLogin";
import FormContent from "./FormContent";

import Message from "../Message/Message";

import AppUploadFile from "../UploadFileMain/AppUploadFile";

import image1 from "../../images/rehabilitation-specialist.jpg";
import image2 from "../../images/yoga.jpg";

import { imagesUrl } from "../../services/apiUrl";

// import FormUploadImage from "../Form/FormUploadImage/FormUploadImage";

import styles from "./HomeContent.module.css";

const HomeContent = ({ props }) => {
  const auth = useContext(authContext);

  console.log("authAdminPage:", auth);

  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState("");

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

    setMessage("Are you sure?");

    if (answer) {
      deleteItem(itemId).then((items) => {
        if (mounted.current) {
          setList(items);
          setAlert(true);
        }
      });
    }
  };

  // useEffect(() => {
  //   removeItem()
  // }, []);

  // let imageName = "";

  console.log("list:", list);

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <div className={styles.homeContent}>
        <h2>Hello from HomeContent</h2>
        <div className={styles.homeContentWrapper}>
          {/* {error && <h2>{handleError(error)}</h2>}
        {!error && loading && <Spinner />} */}
          <div className={styles.homeMainContent}>
            <ul className={styles.homeContentList}>
              {/* <li>From li</li> */}

              {list && list.length > 0 ? (
                list.map((item) => (
                  // console.log("stateListUl11111111:", list),
                  <li key={item.id} className={styles.homeContentItem}>
                    {/* <a href={item.url}>{item.title}</a> */}
                    <div className={styles.homeContentItemWrapper}>
                      <h3 className={styles.homeContentItemTitle}>
                        {item.hometitle}
                      </h3>
                      {/* <span>{item._id}</span> */}

                      <ul className={styles.homeItemList}>
                        {item.hometext.map((homeitem) => (
                          // console.log("homeitemUl222222:", homeitem),
                          <li key={homeitem.id} className={styles.homeTextItem}>
                            <div className={styles.homeTextItemWrapper}>
                              <h4>{homeitem.textTitle}</h4>
                              <div className={styles.textWrapper}>
                                {homeitem.toppings ? (
                                  <span className={styles.toppings}>
                                    {homeitem.toppings}
                                  </span>
                                ) : null}

                                <p className={styles.text}>{homeitem.text}</p>
                              </div>
                              {/* image: "C:\\fakepath\\10331679ed0600eef6b3d330c65c1159.png" */}
                              {homeitem.image ? (
                                <div className={styles.homeItemImageWrapper}>
                                  <img
                                    src={
                                      `${imagesUrl}/` +
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
                                <a
                                  href={homeitem.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={styles.contactsLink}>
                                  {homeitem.link}
                                </a>
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

          <div className={styles.imageWrapper}>
            <Link
              to="/ourservices/rehabilitation"
              className={styles.imageWrapper}>
              <div className={styles.rehabilitationWrapper}>
                {/* <h4>Title</h4> */}
                <img
                  src={image1}
                  alt="Реабілітолог"
                  className={styles.itemImage}
                />
                <p>Наш реабілітолог</p>
              </div>
            </Link>
            <Link to="/ourservices/womenclub" className={styles.imageWrapper}>
              <div className={styles.womenClubWrapper}>
                {/* <h4>Title</h4> */}
                <img
                  src={image2}
                  alt="Жіночий клуб"
                  className={styles.itemImage}
                />
                <p>Наш жіночий клуб</p>
              </div>
            </Link>
          </div>
        </div>

        {auth.isAuthenticated ? (
          <div className={styles.formAdminWrapper}>
            <div className={styles.formContentWrapper}>
              <FormContent />
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
