import React, { Fragment, useContext } from "react";
import authContext from "../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchResultwork";

// import { getTitle } from "../../services/getTitle";
import ContentPageResult from "../ContentPage/ContentPageResult";
import FormContent from "../Form/FormContent";
import SvgResult from "../SvgComponents/SvgResult";

// import Slider from "../Slider/Slider";

import styles from "../ContentPage/ContentPageResult.module.css";

const ResultsWork = (props) => {
  const auth = useContext(authContext);

  // console.log("props: ", props);

  // const localPath = props.location.pathname;
  // const titleNested = getTitle(localPath);

  const titleName = "Результати роботи";

  return (
    <Fragment>
      <div className={styles.сontentComponentWrapper}>
        <ContentPageResult
          onTitle={titleName}
          SvgContent={SvgResult}
          onGetAllItems={getAllItems}
          onDeleteItem={deleteItem}
        />
        {/* <Slider /> */}
        {auth.isAuthenticated ? (
          <div className={styles.formResultsWorkWrapper}>
            <FormContent onCreateItem={createItem} />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default ResultsWork;
