import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import authContext from "../../services/authContext";
import {
  HOMEITEMS_URL,
  IMAGES_URL,
  IMAGES_URL_DB,
  UPLOAD_IMAGE_URL,
} from "../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchItems";

import ContentPage from "../ContentPage/ContentPage.js";
import FormContent from "../Form/FormContent";
import SvgAboutUs from "../SvgComponents/SvgAboutUs";
import ImagesPage from "../PagesComponent/ImagesPage/ImagesPage";

import image1 from "../../images/static/rehabilitation-specialist-1624479221668.jpg";
import image2 from "../../images/static/150199392_234037011696938_4418853326113702292_n-1624479265986.jpg";

import styles from "./HomeContent.module.css";

const HomeContent = (props) => {
  const auth = useContext(authContext);

  const titleName = "Про наш простір";

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageWrapper}>
          <div className={styles.сontentPageMain}>
            <ContentPage
              onTitle={titleName}
              SvgContent={SvgAboutUs}
              URL={HOMEITEMS_URL}
              URL_IMAGES={IMAGES_URL}
              onGetAllItems={getAllItems}
              onDeleteItem={deleteItem}
            />
          </div>
          <div className={styles.blockImageWrapper}>
            <h3 className={styles.blockImageTitle}>Наша родзинка</h3>
            <Link to="/services/rehabilitation" className={styles.imageLink}>
              <div className={styles.imageWrapper}>
                <img
                  src={image1}
                  alt="Реабілітолог"
                  className={styles.itemImage}
                />
                <h5 className={styles.tileImage}>Реабілітолог</h5>
              </div>
            </Link>
            <Link to="/services/womenclub" className={styles.imageLink}>
              <div className={styles.imageWrapper}>
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
              <FormContent onCreateItem={createItem} URL={HOMEITEMS_URL} />
            </div>
            <div className={styles.appUploadFileWrapper}>
              <ImagesPage
                URL_IMAGES={IMAGES_URL}
                URL_IMAGES_DB={IMAGES_URL_DB}
                URL_UPLOAD_IMAGE={UPLOAD_IMAGE_URL}
              />
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default HomeContent;
