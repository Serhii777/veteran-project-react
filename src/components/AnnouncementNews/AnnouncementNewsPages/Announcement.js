import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import {
  API_URL_ANNOUNCEMENTS, IMAGES_URL
} from "../../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchItems";


import { getTitle } from "../../../services/getTitle";
import ContentPageAnnounNews from "../../ContentPage/ContentPageAnnounNews";
import FormContentAnnounNews from "../../Form/FormContentAnnounNews";
import SvgBellBlackSound from "../../SvgComponents/SvgBellBlackSound";

import styles from "../../ContentPage/ContentPageAnnounNews.module.css";

const AnnouncementCont = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPageAnnounNews
        onTitle={titleNested}
        SvgContent={SvgBellBlackSound}
        URL={API_URL_ANNOUNCEMENTS}
        URL_IMAGES={IMAGES_URL}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContentAnnounNews onCreateItem={createItem} URL={API_URL_ANNOUNCEMENTS}/>
        </div>
      ) : null}
    </Fragment>
  );
};

export default AnnouncementCont;
