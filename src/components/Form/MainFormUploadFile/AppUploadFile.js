import React from "react";
import FormUploadFile from "./FormUploadFile";

import styles from "./AppUploadFile.module.css";

const AppUploadFile = ({ URL_IMAGES, URL_UPLOAD_IMAGE }) => (
  <div className={styles.appUploadFileWrapper}>
    <h4 className={styles.appUploadFileTitle}>Форма завантаження зображень</h4>
    <div className={styles.formUploadFileWrapper}>
      <FormUploadFile
        URL_IMAGES={URL_IMAGES}
        URL_UPLOAD_IMAGE={URL_UPLOAD_IMAGE}
      />
    </div>
  </div>
);

export default AppUploadFile;
