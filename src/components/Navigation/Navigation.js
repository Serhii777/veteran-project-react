import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";

import styles from "./Navigation.module.css";

{
  /* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route> */
}

const Navigation = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <h3 className={styles.navigationTitle}>Hello from Navigation</h3>
      {/* <Router> */}
      <div>
        <ul className={styles.navigationList}>
          {routes.map((route) => (
            <li className={styles.navigationItem}>
              <NavLink
                key={route.label}
                to={route.path}
                exact={route.exact}
                className={styles.link}
                activeClassName={styles.activelink}>
                {route.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* </Router> */}
      {/* ))} */}
      {/* <NavLink
        to="/admin"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        admin
      </NavLink> */}
    </nav>
  );
};

export default Navigation;
