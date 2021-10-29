import React, { Fragment, useState } from "react";
// import Message from "../../Message/Message";
// import Progress from "./Progress";
import axios from "axios";
import Button from "../../Button/Button";

// import { store } from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";
// import "animate.css";

import { UPLOAD_IMAGE_URL, IMAGES_URL } from "../../../services/apiUrl";

import styles from "./FormUploadFile.module.css";

// const uploadImagesUrl = "http://localhost:4001/images/upload";

const FormUploadFile = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [titleImage, setTitleImage] = useState("");
  const [descriptionImage, setDescriptionImage] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    // console.log("setFile:", e.target.files[0]);
    // console.log("setTitleImage:", e.target); //* <input type="file"class="" id="">
    // console.log("setTitleImage:", e.target.input); //* <input type="file"class="" id="">
    // console.log("setTitleImage.Value:", e.target.value); //* setNameImage.Value: C:\fakepath\img-02.jpg

    // console.log("titleImage:", titleImage);
    // console.log("descriptionImage:", descriptionImage);
    // console.log("uploadedFile:", uploadedFile);

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
      const res = await axios.post(`${UPLOAD_IMAGE_URL}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log("res.data: ", res.data);

      const { imageFilename, imagePath, imageInitialSize } = res.data.image;

      setUploadedFile({ imageFilename, imagePath, imageInitialSize });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      // setUploadPercentage(0);
    }
  };

  console.log("uploadedFile:", uploadedFile);

  return (
    <Fragment>
      {/* {message ? <Message msg={message} /> : null} */}
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
            // onChange={onChange}
            type="text"
            value={descriptionImage}
            className={styles.formDataInput}
            placeholder="Ваш опис"
            id="desc"
          />
        </div>

        {/* <Progress percentage={uploadPercentage} /> */}

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
                src={`${IMAGES_URL}/${uploadedFile.imageFilename}`}
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
