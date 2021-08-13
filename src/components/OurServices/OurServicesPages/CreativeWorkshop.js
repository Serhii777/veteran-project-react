import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchCreateworkshop";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgDesign from "../../SvgComponents/SvgDesign";

import styles from "../../ContentPage/ContentPage.module.css";

const CreativeWorkshop = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPage
        onTitle={titleNested}
        SvgContent={SvgDesign}
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

export default CreativeWorkshop;
