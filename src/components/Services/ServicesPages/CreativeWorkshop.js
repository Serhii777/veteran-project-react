import React, { Fragment, useContext } from "react";
import authContext from "../../../services/authContext";

import { API_URL_CREATEWORCSHOP, IMAGES_URL } from "../../../services/apiUrl";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../../services/useFetchItems";

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
        URL={API_URL_CREATEWORCSHOP}
        URL_IMAGES={IMAGES_URL}
        onGetAllItems={getAllItems}
        onDeleteItem={deleteItem}
      />
      {auth.isAuthenticated ? (
        <div className={styles.formResultsWorkWrapper}>
          <FormContent onCreateItem={createItem}  URL={API_URL_CREATEWORCSHOP}/>
        </div>
      ) : null}
    </Fragment>
  );
};

export default CreativeWorkshop;
