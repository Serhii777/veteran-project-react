import React, { Fragment, useContext } from "react";
import authContext from "../../services/authContext";

import {
  createItem,
  getAllItems,
  deleteItem,
} from "../../services/useFetchResultwork";

// import { getTitle } from "../../services/getTitle";
// import ContentPageResult from "../ContentPage/ContentPageResult";
import ContentPageAnnounNews from "../ContentPage/ContentPageAnnounNews";
// import FormContent from "../Form/FormContent";
import FormContentAnnounNews from "../Form/FormContentAnnounNews";
import ListHistory from "./ListHistory";
import SvgResult from "../SvgComponents/SvgResult";

// import Slider from "../Slider/Slider";

import styles from "../ContentPage/ContentPageResult.module.css";

const ResultsWork = (props) => {
  const auth = useContext(authContext);

  console.log("propsResultsWork: ", props);

  // const localPath = props.location.pathname;
  // const titleNested = getTitle(localPath);

  // console.log("titleNestedResultsWork: ", titleNested);

  const titleName = "Результати роботи";

  return (
    <Fragment>
      <div className={styles.сontentComponentWrapper}>
        <ContentPageAnnounNews
          onTitle={titleName}
          SvgContent={SvgResult}
          onGetAllItems={getAllItems}
          onDeleteItem={deleteItem}
        />
        {/* <Slider /> */}
        {auth.isAuthenticated ? (
          <div className={styles.formResultsWorkWrapper}>
            {/* <FormContent onCreateItem={createItem} /> */}
            <FormContentAnnounNews onCreateItem={createItem} />
            <ListHistory
              onTitle={titleName}
              SvgContent={SvgResult}
              onGetAllItems={getAllItems}
              onDeleteItem={deleteItem}
            />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default ResultsWork;
