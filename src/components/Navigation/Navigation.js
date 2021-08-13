// import React from "react";
import React from "react";
// import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import routes from "../../routes";

import styles from "./Navigation.module.css";

// const Navigation = (props) => {
const Navigation = ({ open, setOpen, ...props }) => {
  console.log("props: ", props);

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  // <StyledMenu open={open} aria-hidden={!isHidden} {...props}></StyledMenu>

  
  let history = useHistory();

  const handleOnClick = (event) => {
    setTimeout(() => {
      history.push(`${history.location.pathname}/${event.target.value}`);
    }, 300);
  };

  return (
    <nav
      className={
        open === true
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
                      className={
                      //   open !== true
                      //     ? `${styles.link} ${styles.navHide}`
                      //     : `${styles.link} ${styles.navOpen}`
                      // }
                      styles.link}
                      activeClassName={styles.activelink}>
                      {route.title}
                      {route.routes ? (
                        <div className={styles.selectListWrapper}>
                          <ul
                            aria-label="State"
                            onChange={handleOnClick}
                            className={styles.selectList}>
                            {route.routes.map((nestedRoute) => {
                              return (
                                <li className={styles.optionItem}>
                                  <NavLink
                                    key={nestedRoute.label}
                                    to={nestedRoute.path}
                                    value={nestedRoute.label}
                                    disabled={nestedRoute.disabled}
                                    className={styles.optionLink}
                                    activeClassName={styles.optionLink}>
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
