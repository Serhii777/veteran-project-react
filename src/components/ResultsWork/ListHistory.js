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
import styles from "./ListHistory.module.css";

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
  const [openDetails, setOpenDetails] = useState(false);
  const [itemIdClick, setItemIdClick] = useState('');
  const [page, setPage] = React.useState(1);
  

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

  const handleClick = (itemId) => {
    setOpenDetails(!openDetails);
    setItemIdClick(itemId);
  };


  const handleChange = (event, value) => {
    setPage(value);
  };

  const handlerChangeDate = async (e) => {
    const date = e.target.value.split("-");
    const transformedDate = [date[2], date[1], date[0]].join("-");

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
    // month: "long",
    month: "numeric",
    day: "numeric",
    // hour: '2-digit',
    // minute: '2-digit',
  };

  // console.log("listItems:", listItems);

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageTitleWrapper}>
          <h2
            className={`${styles.сontentPageTitle} ${styles.сontentPageTitleSocial}`}>
            Список результатів роботи
          </h2>
        </div>
        <div className={styles.сontentPageWrapper}>
          <div className={styles.inputDateWrapper}>{/* <Picker /> */}</div>

          {/* {!error && loading && <Spinner />} */}
          <div className={styles.сontentPageMain}>
            <ul className={styles.сontentPageList}>
              {listItems && listItems.length > 0 ? (
                listItems
                  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                  .map(
                    (itemli, index) => (
                      console.log("itemResult: ", itemli),
                      (
                        <li
                          key={itemli.id}
                          className={
                            auth.isAuthenticated
                              ? `${styles.сontentPageItem} ${styles.сontentPageItemHover}`
                              : styles.сontentPageItem
                          }>
                          <div className={styles.сontentPageItemWrapper}>
                            <div className={styles.сontentPageItemDateWrapper}>
                              <span className={styles.сontentPageItemNumber}>
                                {index + 1}
                              </span>
                              {itemli.date ? (
                                <h3 className={styles.сontentPageItemDate}>
                                  {itemli.date !== undefined
                                    ? new Date(itemli.date).toLocaleDateString(
                                        "Uk-uk",
                                        options
                                      )
                                    : null}
                                </h3>
                              ) : null}
                            </div>
                            <div className={styles.сontentItemWrapper}>
                              <h3 className={styles.сontentPageItemTitle}>
                                {itemli.title}
                              </h3>

                              <ul className={styles.сontentPageItemList}>
                                {itemli.contentText.map(
                                  (item) => (
                                    // console.log(
                                    //   "psychologicalsUl222222:",
                                    //   item
                                    // ),
                                    console.log(
                                      "itemli.id22222222:",
                                      itemli._id
                                    ),
                                    console.log(
                                      "itemIdClick22222222:",
                                      itemIdClick
                                    ),
                                    (
                                      <li
                                        key={item.id}
                                        className={styles.textItem}>
                                        {openDetails &&
                                          itemli._id === itemIdClick && (
                                            <div
                                              className={
                                                styles.textItemWrapper
                                              }>
                                              {item.textTitle ? (
                                                <h4
                                                  className={
                                                    styles.textItemTitle
                                                  }>
                                                  {item.textTitle}
                                                </h4>
                                              ) : null}

                                              <div
                                                className={styles.textWrapper}>
                                                {item.toppings ? (
                                                  <span
                                                    className={styles.toppings}>
                                                    {item.toppings}
                                                  </span>
                                                ) : null}

                                                {item.text ? (
                                                  <p className={styles.text}>
                                                    {item.text}
                                                  </p>
                                                ) : null}
                                              </div>

                                              {item.image ? (
                                                <div
                                                  className={
                                                    styles.homeItemImageWrapper
                                                  }>
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
                                                <div
                                                  className={
                                                    styles.contentLinkWrapper
                                                  }>
                                                  <p
                                                    className={
                                                      styles.contentLinkText
                                                    }>
                                                    Посилання на джерело:
                                                  </p>
                                                  <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={
                                                      styles.contentLink
                                                    }>
                                                    перейти...
                                                  </a>
                                                </div>
                                              ) : null}
                                            </div>
                                          )}
                                      </li>
                                    )
                                  )
                                )}
                              </ul>
                            </div>
                          </div>

                          <Fragment>
                            {auth.isAuthenticated ? (
                              <div className={styles.buttonWrapper}>
                                {/* <div className={styles.buttonRemoveWrapper}> */}
                                <button
                                  onClick={() => removeItem(itemli._id)}
                                  className={styles.buttonRemove}>
                                  ❌
                                </button>
                                {/* </div> */}

                                <div className={styles.buttonOpenWrapper}>
                                  <button
                                    onClick={() => handleClick(itemli._id)}
                                    className={styles.buttonShow}>
                                    {openDetails
                                      ? "Сховати"
                                      : "Показати деталі..."}
                                  </button>
                                </div>
                              </div>
                            ) : null}
                          </Fragment>

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
                      )
                    )
                  )
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
            {/* <Slider sliderImage={listItems} /> */}
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
