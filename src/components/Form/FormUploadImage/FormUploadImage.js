import React, { useEffect, useState, useRef } from "react";
import { useFileUpload } from "use-file-upload";

import axios from "axios";
import { imagesUrl } from "../../../services/apiUrl";

import {
  getAllImages,
  // createItem,
  // createImage,
  // deleteItem,
} from "../../../services/useFetchArray";

import styles from "./FormUploadImage.module.css";

const FormUploadImage = () => {
  const [files, selectFiles] = useFileUpload(null);
  const [alert, setAlert] = useState(false);
  const [images, setImages] = useState([]);
  const mounted = useRef(true);

  // const urlQuery = "/images";

  useEffect(() => {
    mounted.current = true;
    if (images.length && !alert) {
      return;
    }
    
    getAllImages().then((items) => {
      if (mounted.current) {
        // console.log("getImages", items);
        setImages(items);
      }
    });

    return () => (mounted.current = false);
  }, [alert, files]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 100);
    }
  }, [alert]);

  // const uploadFiles = () => {};

  return (
    <div className={styles.formUploadWrapper}>
      <button
        onClick={() => {
          //   selectFiles({ accept: 'image/*'}, (files) => { // Single File Upload accepts only images
          // selectFiles({multiple: true }, (files) => { // Single File Upload
          selectFiles({ accept: "image/*", multiple: true }, (files) => {
            console.log("files:", files);

            // Note callback return an array
            files.map(({ source, name, size, file }) => {
              console.log({ source, name, size, file });
            });
            // Todo: Upload to cloud.

            //         const imageInput = [e.target.files[0]];
            //   console.log("imageInpute.target.files[0]:", e.target.files);

            let myFile = files[0];

            console.log("myFile:", myFile);
            // const myFile = files[0];
            // const myFile = file;

            const formData = new FormData();
            formData.append("image", myFile);
            // formData.append("name", "Argon Yonjan");

            console.log("formData:", formData);

            // http://localhost:4001/files/upload
            axios({
              url: `${imagesUrl}/upload`,
              method: "POST",

              headers: {
                "Contetnt-Type": "multipart/form-data",
              },

              data: formData,
              // data: myFile,
            })
              .then((res) => {
                console.log("res.data:", res.data);
                if (res.data && res.data > 0) {
                  // files = res.data;
                  selectFiles(res.data);
                }
              })
              .catch((error) => {
                console.log("error:", error);
              });
          });
        }}>
        Click to Upload
      </button>

      {images || files ? (
        <div>
          <ul>
            {images.map((image) => (
              // console.log("image:", image),
              <li>
                <img src={image.source} alt="preview" />
                <span> Name: {image.name} </span>
                <span> Size: {image.size} </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <span>No file selected</span>
      )}
    </div>
  );
};

export default FormUploadImage;
