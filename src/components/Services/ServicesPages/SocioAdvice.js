import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";
import { API_URL_SOCIOADVICES, IMAGES_URL } from "../../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchItems";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgGroupOfPeople from "../../SvgComponents/SvgGroupOfPeople";

import styles from "../../ContentPage/ContentPage.module.css";

const SocioAdvice = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPage
        onTitle={titleNested}
        SvgContent={SvgGroupOfPeople}
        URL={API_URL_SOCIOADVICES}
        URL_IMAGES={IMAGES_URL}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem} URL={API_URL_SOCIOADVICES} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default SocioAdvice;
