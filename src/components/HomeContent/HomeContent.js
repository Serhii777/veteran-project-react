import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

// import Spinner from "../Spinner";

import authContext from "../../services/authContext";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchHomeitem";

import ContentPage from "../ContentPage/ContentPage.js";
import FormContent from "../Form/FormContent";
// import AppUploadFile from "../Form/MainFormUploadFile/AppUploadFile";
import SvgAboutUs from "../SvgComponents/SvgAboutUs";
import ImagesPage from '../PagesComponent/ImagesPage/ImagesPage'

import image1 from "../../images/static/rehabilitation-specialist-1624479221668.jpg";
import image2 from "../../images/static/150199392_234037011696938_4418853326113702292_n-1624479265986.jpg";

// import styles from "../ContentPage/ContentPage.module.css";
import styles from "./HomeContent.module.css";

const HomeContent = (props) => {
  const auth = useContext(authContext);

  console.log("props: ", props);

  const titleName = "Про наш простір";

  return (
    <Fragment>
      <div className={styles.сontentPage}>
        <div className={styles.сontentPageWrapper}>
          {/* {!error && loading && <Spinner />} */}
          <div className={styles.сontentPageMain}>
            <ContentPage
              onTitle={titleName}
              SvgContent={SvgAboutUs}
              onGetAllItems={getAllItems}
              onDeleteItem={deleteItem}
            />
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
              <ImagesPage />
              {/* <AppUploadFile /> */}
            </div>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default HomeContent;
