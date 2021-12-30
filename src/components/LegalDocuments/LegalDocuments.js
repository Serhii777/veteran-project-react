import React, { Fragment, useContext } from "react";
import authContext from "../../services/authContext";

import { API_URL_LEGALITEM } from "../../services/apiUrl";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchItems";

import ContentPage from "../ContentPage/ContentPage.js";
import FormContent from "../Form/FormContent";
import SvgLaws from "../SvgComponents/SvgLaws";

import styles from "../ContentPage/ContentPage.module.css";

const LegalDocuments = (props) => {
  const auth = useContext(authContext);

  const titleName = "Важливо знати";

  return (
    <Fragment>
      <ContentPage
        onTitle={titleName}
        SvgContent={SvgLaws}
        URL={API_URL_LEGALITEM}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem} URL={API_URL_LEGALITEM} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default LegalDocuments;
