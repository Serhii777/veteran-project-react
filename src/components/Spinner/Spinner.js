import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loader}>
      <Loader type="Oval" color="#076702" height={50} width={50} />
    </div>
  );
};

export default Spinner;
