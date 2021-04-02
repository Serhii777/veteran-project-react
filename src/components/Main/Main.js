import React from "react";
import styles from "./Main.module.css";

const Main = ({ children }) => {
  return (
    <div className={styles.main}>
      <h1>Hello from Main</h1>
      {children}
    </div>
  );
};

export default Main;
