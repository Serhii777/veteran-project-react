import React, {
  Fragment,
  useCallback,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import authContext from "../../services/authContext";
// import {
//   createItem,
//   getAllItems,
//   deleteItem,
// } from "../../../services/useFetchSocioadvice";
import { IMAGES_URL } from "../../services/apiUrl";
import Spinner from "../Spinner/Spinner";

import Slider from "../Slider/Slider";
import Picker from "../Picker/Picker";

// import FormContent from "../Form/FormContent.js";
// import SvgGroupOfPeople from "../SvgComponents/SvgGroupOfPeople";

import { store } from "react-notifications-component";
import styles from "./ContentPage.module.css";

const ContentPageResult = ({
  onTitle,
  SvgContent,
  onGetAllItems,
  onDeleteItem,
}) => {
  const auth = useContext(authContext);

  // console.log("onTitle: ", onTitle);

  const [alert, setAlert] = useState(false);
  const [listItems, setListItems] = useState([]);

  const mounted = useRef(true);

  const getItems = useCallback(() => {
    mounted.current = true;
    if (listItems.length && !alert) {
      return;
    }

    onGetAllItems().then((items) => {
      if (mounted.current && items) {
        setListItems(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, listItems.length, onGetAllItems]);

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

    if (answer) {
      onDeleteItem(itemId).then((items) => {
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



  const handlerChangeDate = async e => {
    const date = e.target.value.split('-');
    const transformedDate = [date[2], date[1], date[0]].join('-');

    this.setState({
      date: e.target.value,
      transformedDate,
    });

    await this.props.onGetInfo(transformedDate);
  };

  // useEffect(() => {
  //   removeItem();
  // }, [removeItem()]);

  // let imageName = "";

  const options = {
    // weekday: 'long',
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: '2-digit',
    // minute: '2-digit',
  };

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
        <div className={styles.inputDateWrapper}>

          <Picker />
        </div>


          {/* {!error && loading && <Spinner />} */}
          <div className={styles.сontentPageMain}>
            <ul className={styles.сontentPageList}>
              {listItems && listItems.length > 0 ? (
                listItems.map((item, index) => (
                  console.log("itemResult: ", item),
                  <li
                    key={item.id}
                    className={
                      auth.isAuthenticated
                        ? `${styles.сontentPageItem} ${styles.сontentPageItemHover}`
                        : styles.сontentPageItem
                    }>
                    <div className={styles.сontentPageItemWrapper}>
                      <div className={styles.сontentPageItemDateWrapper}>
                        {/* <span className={styles.сontentPageItemNumber}>
                          {index + 1}
                        </span> */}
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

                                {/* {item.image ? (
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
                                ) : null} */}

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
                  {setTimeout(() => {
                    <Spinner />;
                  }, 1000) ? (
                    <div>"Enter your data"</div>
                  ) : (
                    <div>"Enter your data"</div>
                  )}
                </Fragment>
              )}
            </ul>
            <Slider sliderImage={listItems} />
          </div>
        </div>
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

export default ContentPageResult;
