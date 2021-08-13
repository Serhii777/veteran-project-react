import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchAnnouncements";

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
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContentAnnounNews onCreateItem={createItem} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default AnnouncementCont;
