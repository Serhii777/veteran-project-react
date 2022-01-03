import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import {
  API_URL_NEWS,
  IMAGES_URL_DB,
  IMAGES_URL,
} from "../../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchItems";

import { getTitle } from "../../../services/getTitle";
import ContentPageAnnounNews from "../../ContentPage/ContentPageAnnounNews";
import FormContentAnnounNews from "../../Form/FormContentAnnounNews";
import SvgNews from "../../SvgComponents/SvgNews";

import styles from "../../ContentPage/ContentPageAnnounNews.module.css";

const News = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPageAnnounNews
        onTitle={titleNested}
        SvgContent={SvgNews}
        URL={API_URL_NEWS}
        // URL_IMAGES={IMAGES_URL_DB}
        URL_IMAGES={IMAGES_URL}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContentAnnounNews onCreateItem={createItem} URL={API_URL_NEWS} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default News;
