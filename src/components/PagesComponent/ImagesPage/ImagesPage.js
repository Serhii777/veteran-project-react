import React, {
  Fragment,
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
} from "../../../services/useFetchItems";

import AppUploadFile from "../../Form/MainFormUploadFile/AppUploadFile";

import { store } from "react-notifications-component";
import styles from "./ImagesPage.module.css";

const ImagesPage = ({ URL_IMAGES, URL_IMAGES_DB, URL_UPLOAD_IMAGE }) => {
  const auth = useContext(authContext);

  const [imagesItems, setImagesItems] = useState([]);

  const mounted = useRef(true);

  useEffect(() => {
    if (URL_IMAGES_DB) {
      const abortController = new AbortController();
      getAllItems(URL_IMAGES_DB, { signal: abortController.signal }).then(
        (data) => {
          setImagesItems(data.images);
        }
      );

      return () => {
        abortController.abort();
      };
    }
  }, [URL_IMAGES_DB]);

  const removeItem = (itemId) => {
    let answer = window.confirm(
      "Ви дійсно хочете видалити цей об'єкт? Подумайте ще раз, адже відновити його вже буде неможливо!"
    );

    if (answer) {
      deleteItem(URL_IMAGES, itemId).then((items) => {
        if (mounted.current) {
          setImagesItems(items);

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
                    <li key={item._id} className={styles.imageItem}>
                      {item.imageFilename ? (
                        <div className={styles.imageItemWrapper}>
                          <img
                            src={
                              `${URL_IMAGES}/` +
                              `${item.imageUrl}`.split("").slice(14).join("")
                            }
                            alt={`${item.imageFilename}`}
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

          <div className={styles.appUploadFileWrapper}>
            <AppUploadFile
              onCreateItem={createItem}
              URL_IMAGES={URL_IMAGES}
              URL_UPLOAD_IMAGE={URL_UPLOAD_IMAGE}
            />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default ImagesPage;
