import React from "react";
import FormUploadFile from "./FormUploadFile";

import styles from "./AppUploadFile.module.css";

const AppUploadFile = () => (
  <div className={styles.appUploadFileWrapper}>
    <h4 className={styles.appUploadFileTitle}>Форма завантаження зображень</h4>
    <div className={styles.formUploadFileWrapper}>
      <FormUploadFile />
    </div>
  </div>
);

export default AppUploadFile;
