import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import { API_URL_WOMEN_CLUB, IMAGES_URL } from "../../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchItems";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgYogaBlack from "../../SvgComponents/SvgYogaBlack";

// import ImageCarousel from "./ImageCarousel";

import styles from "../../ContentPage/ContentPage.module.css";

const WomenClub = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPage
        onTitle={titleNested}
        SvgContent={SvgYogaBlack}
        URL_IMAGES={IMAGES_URL}
        URL={API_URL_WOMEN_CLUB}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />

      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem}  URL={API_URL_WOMEN_CLUB}/>
        </div>
      ) : null}
    </Fragment>
  );
};

export default WomenClub;
