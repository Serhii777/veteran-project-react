// import React from "react";
import React, { useState, useEffect, useCallback } from "react"; //  useState
// import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import routes from "../../routes";
import { isMobile } from "../../services/isMobile";
// import { useOnClickOutside } from "./useOnClickHooks";

import styles from "./NavigationJeka.module.css";


const Navigation = ({ open, setOpen }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const onHiddenSubMemu = useCallback(
    (event) => {
      if (document.documentElement.clientWidth >= 768) {
        // console.log("33333: ");
        // console.log("event: ", event);
        // console.log(
        //   "event.target.parentElement.parentElement: ",
        //   event.target.parentElement.parentElement
        // );

        setOpenSubMenu(false);
        setOpen(!open);
        event.target.parentElement.parentElement.style = { display: "none" };

        setTimeout(() => {
          setOpenSubMenu(true);
        }, 1000);
      }
    },
    [open, setOpen]
  );

  useEffect(() => {
    let body = document.querySelector("body");
    if (isMobile.any()) {
      body.classList.add("touch");
    } else {
      body.classList.add("mouse");
      setOpenSubMenu(true);
    }

    return () => {
      // cleanup
      // thisArrow.classList.remove("arrowActive");
    };
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
                // console.log("route: ", route);

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
                          route.routes ? setOpen(open) : setOpen(!open);
                        }
                        if (document.documentElement.clientWidth >= 768) {
                          setOpen(open);
                        }
                      }}
                      className={
                        route.routes
                          ? `${styles.link} ${styles.parent}`
                          : `${styles.link}`
                      }
                      activeClassName={styles.activelink}>
                      {route.title}
                    </NavLink>

                    {route.routes ? (
                      <span
                        className={
                          document.documentElement.clientWidth <= 768
                            ? `${styles.arrow}`
                            : `${styles.arrowRight}`
                        }
                        //* onCLick={() => setOpenSubMenu(!openSubMenu)}
                        onClick={(event) => {
                          setOpenSubMenu(!openSubMenu);
                          // event.target.nextElementSibling.classList.toggle(
                          // "open"
                          // );
                          event.target.classList.toggle("arrowActive");
                        }}></span>
                    ) : null}

                    {route.routes && openSubMenu ? (
                      <ul
                        aria-label="State"
                        onChange={handleOnClick}
                        onClick={(event) => {
                          onHiddenSubMemu(event);
                        }}
                        className={styles.subMenu}>
                        {route.routes.map((subRoute) => {
                          return (
                            <li
                              key={subRoute.id}
                              className={styles.subMenuItem}>
                              <NavLink
                                to={subRoute.path}
                                id="RouterNavLink"
                                href="#x"
                                onClick={() => {
                                  // hiddenSelect();
                                  setOpenSubMenu(false);
                                  setOpen(!open);
                                }}
                                value={subRoute.label}
                                disabled={subRoute.disabled}
                                className={styles.subLink}>
                                {document.documentElement.clientWidth < 768 &&
                                subRoute.title.length > 29
                                  ? subRoute.title.slice(0, 24) + "."
                                  : subRoute.title}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
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
