import React, { Fragment, useContext } from "react";
import authContext from "../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchLegal";

// import { getTitle } from "../../services/getTitle";
import ContentPage from "../ContentPage/ContentPage.js";
import FormContent from "../Form/FormContent";
import SvgLaws from "../SvgComponents/SvgLaws";

import styles from "../ContentPage/ContentPage.module.css";

const LegalDocuments = (props) => {
  const auth = useContext(authContext);

  // const localPath = props.location.pathname;
  // const titleNested = getTitle(localPath);

  const titleName = "Важливо знати";

  return (
    <Fragment>
      <ContentPage
        onTitle={titleName}
        SvgContent={SvgLaws}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem} />
        </div>
      ) : null}
    </Fragment>
  );
};

export default LegalDocuments;
