import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchRehabilitation";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgRelaxing from "../../SvgComponents/SvgRelaxing";

import styles from "../../ContentPage/ContentPage.module.css";

const Rehabilitation = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPage
        onTitle={titleNested}
        SvgContent={SvgRelaxing}
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

export default Rehabilitation;
