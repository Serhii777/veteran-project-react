// import React from "react";
import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import routes from "../../routes";

import styles from "./Navigation.module.css";

// const Navigation = (props) => {
const Navigation = ({ open, setOpen, ...props }) => {
  // console.log("props: ", props);

  const [selectOption, setSelectOption] = useState(null);

  // const isHidden = open ? true : false;
  // const tabIndex = isHidden ? 0 : -1;

  // <StyledMenu open={open} aria-hidden={!isHidden} {...props}></StyledMenu>

  const hiddenSelectList = (event) => {
    console.log("event: ", event.target.parentElement.parentElement);
    console.log(
      "event.class: ",
      event.target.parentElement.parentElement.className
    );
    console.log("hiddenSelectList: ", "111111");
    // setSelectOption(selectOption);
    // event.target.parentElement.parentElement(styles.selectListHidden)

    // React.createClass={
    // open !== true ? `${styles.selectList}` : null
    // }
    // : `${styles.selectListHidden} ${styles.navHide}`
  };

  const hiddenSelect = () => {
    console.log("hiddenSelect: ", "22222");
    // className={
    //   open !== true ? `${styles.selectListWrapper}` : null
    // }
    // : `${styles.navigation} ${styles.navHide}`
  };

  let history = useHistory();

  const handleOnClick = (event) => {
    setTimeout(() => {
      history.push(`${history.location.pathname}/${event.target.value}`);
      // setOpen(!open);
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
        {/* <h3 className={styles.navigationTitle}>Навігація по сайту</h3> */}
        <ul className={styles.navigationList}>
          {routes.filter((route) => route.path !== "/admin") ? (
            routes
              .filter((route) => route.path !== "/admin")
              .map((route) => {
                return (
                  <li className={styles.navigationItem}>
                    <NavLink
                      key={route.label}
                      to={route.path}
                      exact={route.exact}
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
                        <div
                          className={
                            //   open !== true
                            //     ? `${styles.selectListWrapper}`
                            //     : `${styles.selectListWrapperHidden}`
                            // }>
                            styles.selectListWrapper
                          }>
                          <ul
                            aria-label="State"
                            onChange={handleOnClick}
                            onClick={(event) => {
                              hiddenSelectList(event);

                              if (document.documentElement.clientWidth > 768) {
                                setOpen(!open);
                              }
                            }}
                            className={styles.selectList}>
                            {/* className={
                              (console.log("open: ", open),
                              open !== true
                                ? `${styles.selectList}`
                                : `${styles.selectListHidden}`)
                            }> */}
                            {route.routes.map((nestedRoute) => {
                              return (
                                <li className={styles.optionItem}>
                                  <NavLink
                                    key={nestedRoute.label}
                                    to={nestedRoute.path}
                                    onClick={() => {
                                      hiddenSelect();

                                      // if (
                                      //   document.documentElement.clientWidth >
                                      //   768
                                      // ) {
                                      //   setOpen(!open);
                                      // }
                                    }}
                                    value={nestedRoute.label}
                                    disabled={nestedRoute.disabled}
                                    className={styles.optionLink}
                                  >
                                    {document.documentElement.clientWidth <
                                      768 && nestedRoute.title.length > 29
                                      ? nestedRoute.title.slice(0, 24) + "."
                                      : nestedRoute.title}
                                  </NavLink>
                                </li>
                              );
                            })}
                          </ul>
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
