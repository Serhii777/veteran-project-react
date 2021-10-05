// import React from "react";
import React, { useState, useEffect } from "react"; //  useState
// import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import routes from "../../routes";

import styles from "./Navigation.module.css";

// const Navigation = (props) => {
const Navigation = ({ open, setOpen, ...props }) => {
  // console.log("props: ", props);

  // const [selectOption, setSelectOption] = useState(null);
  const [openSelect, setOpenSelect] = useState(true);

  const onHiddenSelectList = (event) => {
    if (document.documentElement.clientWidth >= 768) {
      setOpenSelect(false);
      event.target.parentElement.parentElement.style = { display: "none" };

      setTimeout(() => {
        setOpenSelect(true);
      }, 2000);
    }
  };

  useEffect(() => {
    // function hiddenSelectList(event) {
    //   console.log("event: ", event.target.parentElement);
    //   console.log("event.class: ", event.target.parentElement.parentElement);
    //   console.log("hiddenSelectList: ", "111111");
    //   // event.target.parentElement.parentElement.classList.remove("selectList");
    //   // event.target.parentElement.parentElement.classList.add("selectListHidden");
    //   event.target.parentElement.parentElement.style = { display: "none" };
    //   setOpenSelect(!openSelect);
    //   //
    //   console.log(
    //     "event.classHidden: ",
    //     event.target.parentElement.parentElement.className
    //   );
    // setSelectOption(selectOption);
    // event.target.parentElement.parentElement(styles.selectListHidden)
    // React.createClass={
    // open !== true ? `${styles.selectList}` : null
    // }
    // : `${styles.selectListHidden} ${styles.navHide}`
    // }
  }, []);

  let history = useHistory();

  const handleOnClick = (event) => {
    setTimeout(() => {
      history.push(`${history.location.pathname}/${event.target.value}`);
      setOpen(!open);
    }, 300);
  };

  return (
    <nav
      className={
        open === true || document.documentElement.clientWidth > 768
          ? `${styles.navigation} ${styles.navOpen}`
          : `${styles.navigation} ${styles.navHide}`
      }>
      <div className={styles.navigationWrapper}>
        <ul className={styles.navigationList}>
          {routes.filter((route) => route.path !== "/admin") ? (
            routes
              .filter((route) => route.path !== "/admin")
              .map((route) => {
                return (
                  <li key={route.id} className={styles.navigationItem}>
                    <NavLink
                      to={route.path}
                      exact={route.exact}
                      id="RouterNavLink"
                      componentclass="div"
                      href="#x"
                      onClick={() => {
                        if (document.documentElement.clientWidth < 768) {
                          setOpen(!open);
                        }
                        if (document.documentElement.clientWidth >= 768) {
                          setOpen(open);
                        }
                      }}
                      className={styles.link}
                      activeClassName={styles.activelink}>
                      {route.title}
                      {route.routes ? (
                        <div className={styles.selectListWrapper}>
                          {/* className={
                            openSelect === true ||
                            document.documentElement.clientWidth <= 768
                              ? `${styles.selectListWrapper} ${styles.selectListWrapperOpen}`
                              : `${styles.selectListWrapper} ${styles.selectListWrapperHide}`
                          }> */}

                          {openSelect ? (
                            <ul
                              aria-label="State"
                              onChange={handleOnClick}
                              onClick={(event) => {
                                onHiddenSelectList(event);
                                // setOpenSelect(!openSelect);
                              }}
                              className={styles.selectList}>
                              {/* className={
                                document.documentElement.clientWidth < 768
                                  ? `${styles.selectList} ${styles.selectListOpen}`
                                  : openSelect === false ||
                                    document.documentElement.clientWidth >= 768
                                  ? `${styles.selectList} ${styles.selectListOpen}`
                                  : `${styles.selectList} ${styles.selectListHide}`
                              }> */}
                              {route.routes.map((nestedRoute) => {
                                // console.log("nestedRoute.id: ", nestedRoute.id);
                                return (
                                  <li
                                    key={nestedRoute.id}
                                    className={styles.optionItem}>
                                    <NavLink
                                      to={nestedRoute.path}
                                      id="RouterNavLink"
                                      href="#x"
                                      onClick={() => {
                                        // hiddenSelect();
                                        // setOpenSelect(!openSelect);
                                      }}
                                      value={nestedRoute.label}
                                      disabled={nestedRoute.disabled}
                                      className={styles.optionLink}>
                                      {document.documentElement.clientWidth <
                                        768 && nestedRoute.title.length > 29
                                        ? nestedRoute.title.slice(0, 24) + "."
                                        : nestedRoute.title}
                                    </NavLink>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </div>
                      ) : null}
                    </NavLink>
                  </li>
                );
              })
          ) : (
            <li className={styles.navigationItem}>
              <NavLink
                key="Admin-Home page"
                to="/admin"
                exact
                className={styles.link}
                activeClassName={styles.activelink}>
                Admin-Home page
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
