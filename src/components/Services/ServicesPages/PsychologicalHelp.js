import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";
import { API_URL_PSYCHOLOGICALS, IMAGES_URL } from "../../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchItems";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgPsychologist from "../../SvgComponents/SvgPsychologist";

import styles from "../../ContentPage/ContentPage.module.css";

const PsychologicalHelpCont = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPage
        onTitle={titleNested}
        SvgContent={SvgPsychologist}
        URL={API_URL_PSYCHOLOGICALS}
        URL_IMAGES={IMAGES_URL}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem} URL={API_URL_PSYCHOLOGICALS} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default PsychologicalHelpCont;
