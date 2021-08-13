import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchWomenclub";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgYogaBlack from "../../SvgComponents/SvgYogaBlack";

import ImageCarousel from "./ImageCarousel";

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
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />

      <div className={styles.imageCarouselWrapper}>
        <ImageCarousel />
      </div>
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default WomenClub;
