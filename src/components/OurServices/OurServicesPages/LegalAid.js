import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";
import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchLegalaids";

import { getTitle } from "../../../services/getTitle";
import ContentPage from "../../ContentPage/ContentPage.js";
import FormContent from "../../Form/FormContent";
import SvgLawHalmet from "../../SvgComponents/SvgLawHalmet";

import styles from "../../ContentPage/ContentPage.module.css";

const LegalAid = (props) => {
  const auth = useContext(authContext);

  const localPath = props.location.pathname;

  const titleNested = getTitle(localPath);

  return (
    <Fragment>
      <ContentPage
        onTitle={titleNested}
        SvgContent={SvgLawHalmet}
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

export default LegalAid;
