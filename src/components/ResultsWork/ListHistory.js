import React, { Fragment, useContext, useState, useEffect } from "react";
import authContext from "../../services/authContext";
import Pagination from "@material-ui/lab/Pagination";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import contactFade from "../Animation/ContactFade.module.css";

import { IMAGES_URL } from "../../services/apiUrl";
import Spinner from "../Spinner/Spinner";

// import Slider from "../Slider/Slider";
// import Picker from "../Picker/Picker";

import { store } from "react-notifications-component";
import styles from "./ListHistory.module.css";

const ListHistory = ({ URL, onGetAllItems, onDeleteItem }) => {
  const auth = useContext(authContext);

  const [listItems, setListItems] = useState([]);

  const [openDetails, setOpenDetails] = useState(false);
  const [itemIdClick, setItemIdClick] = useState("");

  const [currentResultItem, setCurrentResultItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const pageSizes = [1, 3, 5, 10];

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const getRequestParams = (searchTitle, page, pageSize) => {
    let params = {};

    if (searchTitle) {
      params["title"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  const handleClick = (itemId) => {
    setOpenDetails(!openDetails);
    setItemIdClick(itemId);
  };

  //! Pagination =============================================
  const retrieveResultItem = () => {
    const params = getRequestParams(searchTitle, page, pageSize);
    onGetAllItems(URL, params)
      .then((response) => {
        const { resultWorks, totalPages } = response;

        setListItems(resultWorks);
        setCount(totalPages);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(retrieveResultItem, [
    URL,
    onGetAllItems,
    page,
    pageSize,
    searchTitle,
  ]);

  const refreshList = () => {
    retrieveResultItem();
    setCurrentResultItem(null);
    setCurrentIndex(-1);
  };

  const setActiveResultItem = (itemli, index) => {
    setCurrentResultItem(itemli);
    setCurrentIndex(index);
  };

  // console.log('currentResultItem:', currentResultItem);

  const removeAllItems = (itemId) => {
    let answer = window.confirm(
      "Ви дійсно хочете видалити цей об'єкт? Подумайте ще раз, адже відновити його вже буде неможливо!"
    );

    if (answer) {
      onDeleteItem(URL, itemId)
        .then((response) => {
          console.log(response.data);
          refreshList();

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
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageTitleWrapper}>
          <h2
            className={`${styles.сontentPageTitle} ${styles.сontentPageTitleSocial}`}>
            Список результатів роботи
          </h2>
        </div>

        <div className={styles.blockSearchTitleWrapper}>
          <div className={styles.inputTitleWrapper}>
            <input
              type="text"
              className={styles.inputTitle}
              placeholder="Пошук по титульній назві"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
          </div>
          <div className={styles.buttonTitleWrapper}>
            <button
              className={styles.buttonShow}
              style={{ background: "#1334ae" }}
              type="button"
              onClick={retrieveResultItem}>
              Пошук
            </button>
          </div>
        </div>
        <div className={styles.сontentPageWrapper}>
          <div className={styles.blockPaginationWrapper}>
            <div className={styles.blockSelect}>
              <p className={styles.textSelect}>Кількість блоків на сторінці:</p>
              <select
                onChange={handlePageSizeChange}
                value={pageSize}
                className={styles.selectSize}>
                {pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <Pagination
              className={styles.blockPagination}
              count={count}
              page={page}
              color="secondary"
              siblingCount={1}
              boundaryCount={2}
              defaultPage={4}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </div>

          <div className={styles.сontentPageMain}>
            <TransitionGroup component="ul" className={styles.сontentPageLis}>
              {listItems ? (
                listItems
                  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                  .map((itemli, index) => (
                    <CSSTransition
                      key={itemli._id}
                      timeout={700}
                      classNames={contactFade}>
                      <li
                        key={itemli.id}
                        className={
                          index === currentIndex
                            ? `${styles.сontentPageItem} ${styles.сontentPageItemActive}`
                            : `${styles.сontentPageItem}`
                        }
                        onClick={() => setActiveResultItem(itemli, index)}>
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
                              {itemli.contentText.map((item) => (
                                <li key={item.id} className={styles.textItem}>
                                  {openDetails && itemli._id === itemIdClick && (
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
                                          className={styles.contentLinkWrapper}>
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
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Fragment>
                          {auth.isAuthenticated ? (
                            <div className={styles.buttonWrapper}>
                              <button
                                onClick={() => removeAllItems(itemli._id)}
                                className={styles.buttonRemove}>
                                ❌
                              </button>

                              <div className={styles.buttonOpenWrapper}>
                                <button
                                  onClick={() => handleClick(itemli._id)}
                                  className={styles.buttonShow}>
                                  {openDetails && itemli._id === itemIdClick
                                    ? "Сховати"
                                    : "Показати деталі..."}
                                </button>
                              </div>
                            </div>
                          ) : null}
                        </Fragment>
                      </li>
                    </CSSTransition>
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
            </TransitionGroup>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ListHistory;
