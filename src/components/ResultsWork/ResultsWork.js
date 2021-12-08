import React, { Fragment, useContext } from "react";
import authContext from "../../services/authContext";

import {
  createItem,
  getAllItems,
  getAllItemsPagin,
  deleteItem,
} from "../../services/useFetchResultwork";

import ContentPageResult from "../ContentPage/ContentPageResult";
import FormContentAnnounNews from "../Form/FormContentAnnounNews";
import ListHistory from "./ListHistory";
import SvgResult from "../SvgComponents/SvgResult";

import { CSSTransition } from "react-transition-group";
import fadeItems from "../Animation/FadeItems.module.css";

import { API_URL_RESULTWORK } from "../../services/apiUrl";

import styles from "../ContentPage/ContentPageAnnounNews.module.css";

const ResultsWork = (props) => {
  const auth = useContext(authContext);

  const titleName = "Результати роботи";

  return (
    <Fragment>
      <div className={styles.сontentComponentWrapper}>
        <ContentPageResult
          onTitle={titleName}
          SvgContent={SvgResult}
          onGetAllItems={getAllItems}
          URL={API_URL_RESULTWORK}
          onDeleteItem={deleteItem}
        />

        {auth.isAuthenticated ? (
          <div className={styles.formResultsWorkWrapper}>
            <FormContentAnnounNews
              onCreateItem={createItem}
              URL={API_URL_RESULTWORK}
            />

            <CSSTransition
              in={true}
              timeout={700}
              classNames={fadeItems}
              unmountOnExit>
              <ListHistory
                URL={API_URL_RESULTWORK}
                onGetAllItems={getAllItemsPagin}
                onDeleteItem={deleteItem}
              />
            </CSSTransition>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default ResultsWork;
