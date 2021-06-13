import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <Loader type="Oval" color="#3942fa" height={40} width={40} />
    </div>
  );
};

export default Spinner;
