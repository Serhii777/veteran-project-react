import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Spinner.module.css";

const Spinner = ({type, color, height, width}) => {
  return (
    <div className={styles.loader}>
      <Loader type={type} color={color} height={height} width={width} />
    </div>
  );
};

export default Spinner;
