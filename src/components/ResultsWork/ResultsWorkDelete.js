import React, {
  Fragment,
  useContext,
  useState,
  // useCallback,
  // useRef,
  useEffect,
} from "react";
import authContext from "../../services/authContext";

import {
  createItem,
  getAllItems,
  getAllItemsPagin,
  deleteItem,
} from "../../services/useFetchResultwork";

// import { getTitle } from "../../services/getTitle";
import ContentPageResult from "../ContentPage/ContentPageResult";
// import { useLazyLoading } from "../../services/useLazyLoading";

// import FormContent from "../Form/FormContent";
import FormContentAnnounNews from "../Form/FormContentAnnounNews";
import ListHistory from "./ListHistory";
import SvgResult from "../SvgComponents/SvgResult";

import { CSSTransition } from "react-transition-group";
import fadeItems from "../Animation/FadeItems.module.css";

// import axios from "axios";
import { API_URL_RESULTWORK } from "../../services/apiUrl";

// import Slider from "../Slider/Slider";

import styles from "../ContentPage/ContentPageResult.module.css";

const ResultsWork = (props) => {
  const auth = useContext(authContext);

  // const URL = API_URL_RESULTWORK;
  // console.log("propsResultsWork: ", props);

  // const [alert, setAlert] = useState(false);

  const [items, setItems] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  // let page = 1;
  let pageSize = 1;

  const getRequestParams = (currentPage, pageSize) => {
    let params = {};

    if (currentPage) {
      params["page"] = currentPage - 1;
      // params["page"] = currentPage;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };

  // const retrieveResultItem = () => {
  useEffect(() => {
    const params = getRequestParams(currentPage, pageSize);
    console.log("currentPage: ", currentPage);

    if (fetching) {
      // getAllItems(API_URL_RESULTWORK, params)
      getAllItems(API_URL_RESULTWORK)
        // axios
        //   .get(`${API_URL_RESULTWORK}`, { params })
        .then((response) => {
          console.log("fetching");
          console.log("response: ", response);

          // const { resultWorks, totalItems } = response.data;
          const { resultWorks, totalItems } = response;
          // const { resultWorks, totalPages } = response.data;
          // const { resultWorks, totalPages } = response;

          console.log("itemsInitial: ", items);
          // console.log("totalPages: ", totalPages);
          console.log("totalItems: ", totalItems);

          //* setItems([...items, ...resultWorks]);

          //! Щоб не повторювались item
          setItems((prev) => {
            return [...new Set([...prev, ...response])];
          });


          setItems(response);

          // setItems([...resultWorks]);
          // setTotalCount(totalPages);
          setTotalCount(totalItems);
          // setCurrentPage((prevState) => prevState + 1);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          setCurrentPage((currentPage = currentPage + 1));
        })
        .finally(() => setFetching(false))
        .catch((e) => {
          console.log(e);
        });
    }
    // return () => {
    //   cleanup
    // }
  }, [currentPage, fetching, items, pageSize]);
  // };

  // useEffect(retrieveResultItem, [
  //   currentPage,
  //   fetching,
  //   items,
  //   pageSize,
  //   totalCount,
  // ]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line no-use-before-define
  }, [scrollHandler, items, totalCount]);

  //! scroll =================
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const scrollHandler = (e) => {
    // console.log("scrollHeight", e.target.documentElement.scrollHeight);
    // //* общая высота страницы с учетом скрола (при  pageSize = 2; -> scrollHeight 2138)
    // console.log("scrollTop", e.target.documentElement.scrollTop);
    // //* текущее положение скрола от верха страницы (scrollTop 0)
    // console.log("innerHeight", window.innerHeight);
    //* высота видимой области страницы - высота вашего браузера (innerHeight 947)
    //* сумма scrollTop и innerHeight как раз и дадут scrollHeight
    // console.log("e: ", e);
    let scrollResult =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);

    console.log("scrollResult: ", scrollResult);
    console.log("itemsResultsWork.length: ", items.length);
    console.log("totalCount: ", totalCount);
    if (scrollResult < 150 && items.length < totalCount) {
      console.log("scroll");
      setFetching(true);
    }
  };

  // const [onScroll, containerRef] = useLazyLoading({
  //   onIntersection: appendItems,
  //   delay: 1200,
  // });

  console.log("itemsResultsWork: ", items);

  const titleName = "Результати роботи";

  return (
    <Fragment>
      {/* <div className={styles.сontentComponentWrapper}> */}
      <div
        // ref={containerRef}
        // onScroll={onScroll}
        className={styles.сontentComponentWrapper}>
        {/* <ContentPageAnnounNews */}
        <ContentPageResult
          onTitle={titleName}
          SvgContent={SvgResult}
          // onGetAllItems={getAllItems}
          URL={API_URL_RESULTWORK}
          items={items}
          onDeleteItem={deleteItem}
        />
        {/* <Slider /> */}
        {auth.isAuthenticated ? (
          <div className={styles.formResultsWorkWrapper}>
            {/* <FormContent onCreateItem={createItem} /> */}
            <FormContentAnnounNews
              onCreateItem={createItem}
              URL={API_URL_RESULTWORK}
            />

            <CSSTransition
              in={true}
              timeout={700}
              classNames={fadeItems}
              unmountOnExit>
              <ListHistory
                // onTitle={titleName}
                // SvgContent={SvgResult}
                URL={API_URL_RESULTWORK}
                // items={items}
                // onGetAllItems={getAllItems}
                onGetAllItems={getAllItemsPagin}
                onDeleteItem={deleteItem}
              />
            </CSSTransition>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default ResultsWork;
