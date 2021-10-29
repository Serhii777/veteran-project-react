import React, {
  Fragment,
  useContext,
  useCallback,
  useState,
  useEffect,
  useRef,
} from "react";
import authContext from "../../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchImages";
import { IMAGES_URL, IMAGES_URL_DB } from "../../../services/apiUrl";

import AppUploadFile from "../../Form/MainFormUploadFile/AppUploadFile";

// import { getTitle } from "../../services/getTitle";
// import ContentPage from "../ContentPage/ContentPageResult";
// import FormContent from "../Form/FormContent";
// import SvgResult from "../SvgComponents/SvgResult";

// import Slider from "../Slider/Slider";

import { store } from "react-notifications-component";
import styles from "./ImagesPage.module.css";

const ImagesPage = (props) => {
  const auth = useContext(authContext);

  //   const [alert, setAlert] = useState(false);
  const [imagesItems, setImagesItems] = useState([]);

  const mounted = useRef(true);

  useEffect(() => {
    if ((IMAGES_URL_DB)) {
      const abortController = new AbortController();
      getAllItems(IMAGES_URL_DB, { signal: abortController.signal }).then(
        (data) => {
          setImagesItems(data.images);
        }
      );

      return () => {
        abortController.abort();
      };
    }
  }, []);


  // getAllItems(IMAGES_URL_DB).then(
  //   (data) => {
  //     setImagesItems(data.images);
  //   }
  // );



  //   const getItems = useCallback(() => {
  //     mounted.current = true;
  //     if (imagesItems.length && !alert) {
  //       return;
  //     }

  // getAllItems(IMAGES_URL).then((items) => {
  //     getAllItems(UPLOAD_IMAGE_URL).then((items) => {
  //       if (mounted.current && items) {
  //         setImagesItems(items);
  //       }
  //     });

  //     return () => (mounted.current = false);
  //   }, [alert, imagesItems.length]);

  //   useEffect(() => {
  //     if (alert) {
  //       setTimeout(() => {
  //         if (mounted.current) {
  //           setAlert(false);
  //         }
  //       }, 100);
  //     }
  //   }, [alert]);

  // const removeItem = (itemId, IMAGES_URL_DB ) => {
  const removeItem = (itemId) => {
    // console.log("IMAGES_URL: ", IMAGES_URL);

    let answer = window.confirm("Are you sure?");

    if (answer) {
      deleteItem(IMAGES_URL, itemId).then((items) => {
        if (mounted.current) {
          setImagesItems(items);
          //   setAlert(true);

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
  // }, []);

  // useEffect(() => {
  //   removeItem();
  // }, []);

  console.log("imagesItems: ", imagesItems);

  return (
    <Fragment>
      {auth.isAuthenticated ? (
        <div className={styles.ImagesPageWrapper}>
          <h2 className={styles.imagePageTitle}>
            Розділ завантаження та видалення листівок в базу даних
          </h2>

          <div className={styles.textWrapper}>
            <p className={styles.text}>
              Для відображення світлин на сайті, їх потрібно спочатку
              завантажити у базу даних. Тільки після цього, всі ці світлини
              будуть доступні для розміщення на всьому сайті. Для контролю
              наявності світлин в базі даних та управління ними (перевірка
              наявності, додавання нових та видалення неактуальних)
              використовується цей розділ.
            </p>
            <p className={styles.text}>
              Довідково: всі світлини, збережені в базі даних, фізично
              зберігаються в папці public
              (Frontend_Full_Stack_Offline2VN\WORKS\veteran_project\veteran-project-node\public\images).
            </p>
          </div>

          <div className={styles.imageListWrapper}>
            <ul className={styles.imageList}>
              {imagesItems && imagesItems.length > 0
                ? imagesItems.map((item, index) => (
                    // console.log("item: ", item),
                    <li key={item._id} className={styles.imageItem}>
                      {item.imageFilename ? (
                        <div className={styles.imageItemWrapper}>
                          <img
                            src={
                              `${IMAGES_URL}/` +
                              `${item.imageUrl}`.split("").slice(14).join("")
                            }
                            alt={`${item.imageFilename}`}
                            // width={200} height={140}
                          />
                          <div className={styles.imageDescriptionWrapper}>
                            <p className={styles.textDescription}>
                              Ім'я файла: {item.imageFilename}
                            </p>
                            <p className={styles.textDescription}>
                              Назва світлини: {item.titleImage}
                            </p>
                            <p className={styles.textDescription}>
                              Опис картинки: {item.descriptionImage}
                            </p>
                          </div>
                        </div>
                      ) : null}

                      <Fragment>
                        {auth.isAuthenticated ? (
                          // console.log("item._id: ", item._id),
                          <div className={styles.buttonRemoveWrapper}>
                            <button
                              onClick={() => removeItem(item._id)}
                              className={styles.buttonRemove}>
                              &#10006;
                            </button>
                          </div>
                        ) : null}
                      </Fragment>
                    </li>
                  ))
                : null}
            </ul>
          </div>

          {/* <Slider /> */}
          <div className={styles.appUploadFileWrapper}>
            <AppUploadFile onCreateItem={createItem} />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default ImagesPage;
