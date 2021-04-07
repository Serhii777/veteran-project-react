import React from "react";

import Navigation from "../Navigation/Navigation";

import styles from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      <h1>Hello from Main</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.navigationWrapper}>
          <Navigation />
        </div>
        <div className={styles.childrenWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Main;
