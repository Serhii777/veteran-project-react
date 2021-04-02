import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationList}>
      <h1>Hello from Navigation</h1>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Home Page
      </NavLink>

      <NavLink
        to="/legaldocuments"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Legal Documents
      </NavLink>

      <NavLink
        to="/ourservices"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Our Services
      </NavLink>

      <NavLink
        to="/AnnouncementNews"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Announcement News
      </NavLink>

      <NavLink
        to="/resultswork"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Results Work
      </NavLink>

      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activelink}>
        Contacts
      </NavLink>

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
