import React, { Fragment, useState } from "react";
import axios from "axios";
import Button from "../../Button/Button";

import styles from "./FormUploadFile.module.css";

const FormUploadFile = ({ URL_IMAGES, URL_UPLOAD_IMAGE }) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [titleImage, setTitleImage] = useState("");
  const [descriptionImage, setDescriptionImage] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("descriptionImage", descriptionImage);
    formData.append("titleImage", titleImage);

    try {
      const res = await axios.post(`${URL_UPLOAD_IMAGE}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { imageFilename, imagePath, imageInitialSize } = res.data.image;

      setUploadedFile({ imageFilename, imagePath, imageInitialSize });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit} className={styles.formUploadFile}>
        <div className={styles.formDataWrapper}>
          <label className={styles.formDataLabelImage} htmlFor="customFile">
            Вибір світлини:
          </label>
          <input
            type="file"
            className={styles.formImageInput}
            id="customFile"
            onChange={onChange}
          />
        </div>

        <div className={styles.formDataWrapper}>
          <label htmlFor="titlePict" className={styles.formDataLabel}>
            Назва картинки:
          </label>
          <input
            onChange={(e) => setTitleImage(e.target.value)}
            // onChange={onChange}
            type="text"
            value={titleImage}
            className={styles.formDataInput}
            placeholder="Ваша назва"
            id="namePict"
          />
        </div>
        <div className={styles.formDataWrapper}>
          <label htmlFor="desc" className={styles.formDataLabel}>
            Опис картинки:
          </label>
          <input
            onChange={(e) => setDescriptionImage(e.target.value)}
            type="text"
            value={descriptionImage}
            className={styles.formDataInput}
            placeholder="Ваш опис"
            id="desc"
          />
        </div>

        <div className={styles.buttonSubmitWrapper}>
          <div className={styles.buttonSubmit}>
            <Button
              title={"Завантажити зображення"}
              type={"submit"}
              disabled={!file}
            />
          </div>
        </div>
      </form>
      {uploadedFile ? (
        <div className={styles.uploadedFileWrapper}>
          <div className={styles.imageContentWrapper}>
            <p className={styles.imageText}>Завантажено в базу даних:</p>
            <h3 className={styles.imageTitle}>{uploadedFile.imageFilename}</h3>
            {uploadedFile.imageFilename ? (
              <img
                style={{ width: "50%" }}
                src={`${URL_IMAGES}/${uploadedFile.imageFilename}`}
                alt={`${uploadedFile.imageFilename}`}
                className={styles.imageContent}
              />
            ) : null}
            {uploadedFile.imageInitialSize ? (
              <p className={styles.imageText}>
                {uploadedFile.imageInitialSize} байт
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FormUploadFile;
