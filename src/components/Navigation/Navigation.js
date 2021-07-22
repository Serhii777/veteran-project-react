// import React from "react";
import React from "react";
// import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import routes from "../../routes";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  // const [value, setValue] = useState("psychologicalhelp");
  let history = useHistory();

  const handleOnClick = (event) => {
    // console.log("valueNavigation:", event.target.value); //* valueNavigation: creativeworkshop7
    // console.log("history:", history); //* history: {length: 50, action: "PUSH", location: {…}, createHref: ƒ, push: ƒ, …}
    // console.log("history.location:", history.location); //* history.location: {pathname: "/ourservices/creativeworkshop", search: "", hash: "", state: undefined, key: "tigphh"}
    // console.log("history.location.pathname:", history.location.pathname); //* /ourservices

    setTimeout(() => {
      history.push(`${history.location.pathname}/${event.target.value}`);
    }, 300);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <h3 className={styles.navigationTitle}>Навігація по сайту</h3>
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
                      className={styles.link}
                      activeClassName={styles.activelink}>
                      {route.title}
                      {route.routes ? (
                        <div className={styles.selectLinkWrapper}>
                          <select
                            aria-label="State"
                            onChange={handleOnClick}
                            className={styles.selectLink}>
                            {route.routes.map((nestedRoute) => {
                              return (
                                <option
                                  key={nestedRoute.label}
                                  to={nestedRoute.path}
                                  value={nestedRoute.label}
                                  disabled={nestedRoute.disabled}
                                  className={styles.optionLink}
                                  activeClassName={styles.optionActivelink}>
                                  {document.documentElement.clientWidth < 768 &&
                                  nestedRoute.title.length > 29
                                    ? nestedRoute.title.slice(0, 24) + "."
                                    : nestedRoute.title}
                                </option>
                              );
                            })}
                          </select>
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
