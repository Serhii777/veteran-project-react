import React from "react";
import FilesUpload from '../../FilesUpload/FilesUpload'

import styles from "./Rehabilitation.module.css";

const Rehabilitation = () => {
  return (
    <div className={styles.rehabilitation}>
      <h2>Hello from Rehabilitation</h2>
      <div className="container" style={{ width: "600px" }}>
      <div className="my-3">
        <h3>bezkoder.com</h3>
        <h4>React Hooks Multiple Files Upload</h4>
      </div>

      <FilesUpload />
    </div>
    </div>
  );
};

export default Rehabilitation;
