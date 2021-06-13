// import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Formik, Form } from "formik";
import { Container, Row, Col, Input, Button } from "reactstrap";
// import qs from "qs";

import { imagesUrl } from "../../../services/apiUrl";

// import logo from '../../../images/logo1324-1360.jpg'

import styles from "./CreativeWorkshop.module.css";

// const fileTypes = [
//   'image/apng',
//   'image/bmp',
//   'image/gif',
//   'image/jpeg',
//   'image/pjpeg',
//   'image/png',
//   'image/svg+xml',
//   'image/tiff',
//   'image/webp',
//   `image/x-icon`
// ];

// function validFileType(file) {
//   return fileTypes.includes(file.type);
// }

// function returnFileSize(number) {
//   if(number < 1024) {
//     return number + 'bytes';
//   } else if(number > 1024 && number < 1048576) {
//     return (number/1024).toFixed(1) + 'KB';
//   } else if(number > 1048576) {
//     return (number/1048576).toFixed(1) + 'MB';
//   }
// }

const url = "http://localhost:4000/pictures";
// const formElem = document.querySelector("#formElemLearn");

const AppFormik = () => {
  return (
    <div className={styles.appFormik}>
      <Container>
        <Row>
          <Col>
            <Formik
              initialValues={{ picture: "" }}
              onSubmit={(values) => {
                console.log("values:", values);
                let dataFormik = new FormData();

                dataFormik.append("pictures", values.picture);
                dataFormik.append("images", "Images from form");

                return fetch(imagesUrl, {
                  method: "post",
                  body: dataFormik,
                  headers: new Headers({
                    "AuthHeader": "123",
                    //  Accept: "application/json"
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => console.log("data:", data))
                  .catch((error) => console.log(error));
              }}>
              {(formProps) => (
                <Form>
                  <Input
                    type="file"
                    name="picture"
                    onChange={(event) =>
                      formProps.setFieldValue("picture", event.target.files[0])
                    }
                  />

                  <Button type="submit">Submit</Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const AppLearn = () => {
  // const formElem = document.getElementById("formElemLearn");
  const form = document.querySelector("form");
  console.log("form:", form);

  const formEl = useRef(null);

  console.log("formEl:", formEl);

  const handleSubmitLearn = async (event) => {
    // };

    // if (form !== null) {
    // console.log("11111111");

    // formEl.onsubmit = async (event) => {
    // form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("event.target:", event.target);

    // console.log("formEl:", formEl);

    // const myFilesLearn = event.target;

    const files = document.querySelector("[type=file]").files;

    console.log("files:", files);

    // const dataFile = new FormData(myFilesLearn);
    // const dataFile = new FormData();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      formData.append("file", file);
      formData.append("upload_preset", "docs_upload_example_us_preset");

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          document.getElementById("data").innerHTML += data;
        });

      // try {
      //   const response = await fetch(url, {
      //     method: "POST",
      //     // body: dataFile,
      //     body: formData,
      //   });

      //   let result = await response.json();
      //   console.log("result:", result);

      //   alert(result.message);
      // } catch (e) {
      //   console.error(e);
      // }
    }
    // });
  };
  // console.log("22222222");

  return (
    <div>
      {/* <form id="formElemLearn" onSubmit={handleSubmitLearn} ref={formEl}> */}
      <form
        id="formElemLearn"
        onSubmit={handleSubmitLearn}
        // onSubmit={onsubmit}
        ref={formEl}
        method="post"
        enctype="multipart/form-data">
        <input type="text" name="firstName" />
        Picture: <input type="file" name="files[]" accept="image/*" />
        <button type="submit" value="Upload Files" name="submit">
          Upload
        </button>
      </form>

      <p id="data"></p>
    </div>
  );
};

function AppMaxIvan() {
  const { register, handleSubmit } = useForm();

  // const onSubmit = async (e) => {
  // e.preventDefault();
  const onSubmit = async (data) => {
    // const formData = new FormData();
    // formData.append("picture", data.picture[0]);

    // const res = await fetch("http://localhost:4000/pictures", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => res.json());

    // alert(JSON.stringify(res));

    const myFile = data.picture[0];
    const fileField = document.querySelector('input[type="file"]').files[0];

    console.log("myFileData", myFile);
    console.log("fileField", fileField);

    const formData = new FormData();
    // const fileField = document.querySelector('input[type="file"]');

    formData.append("picture", myFile);
    formData.append("name", "Image from form");
    formData.append("description", "This is picture from input");

    //* lastModified: 1579825435781
    //* lastModifiedDate: Fri Jan 24 2020 02:23:55 GMT+0200 (за східноєвропейським стандартним часом) {}
    //* name: "desire-pearl-pool-couple-04-1024x683.jpg"
    //* size: 169010
    //* type: "image/jpeg"
    //* webkitRelativePath:

    //! const nameImg = myFile.name;
    // const sizeImg = myFile.size;
    // const typeImg = myFile.type;
    // const lastModifiedImg = myFile.lastModified;
    // const lastModifiedDateImg = myFile.lastModifiedDate;

    // const dataAxios = {
    //   name: nameImg,
    //   size: sizeImg,
    //   type: typeImg,
    //   lastModified: lastModifiedImg,
    //   lastModifiedDate: lastModifiedDateImg,
    // };
    // const options = {
    //   method: "POST",
    //   headers: { "content-type": "application/x-www-form-urlencoded" },
    //   data: qs.stringify(dataAxios),
    //   url,
    //! };

    // const dataURLSearchParams = new URLSearchParams();
    // // for (const pair of new FormData(formElement)) {
    // for (const pair of new FormData("my-form").elements) {
    //   dataURLSearchParams.append(pair[0], pair[1]);
    // }

    // fetch(url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log("Success:", JSON.stringify(response)))
    //   .catch((error) => console.error("Error:", error));

    try {
      // fetch(url, {
      //   method: "post",
      //   body: dataURLSearchParams,
      // }).then(console.log());
      //! axios(options).then(console.log);
      // const params = new URLSearchParams();
      // params.append("picture", myFile);
      // params.append("name", fileField);
      // params.append("number", 12345);
      // params.append("description", "This is picture from input");
      // axios.post("http://localhost:4000/pictures", params).then(console.log);
      // axios
      // .post("http://localhost:4000/pictures", {
      // headers: { "Content-Type": "multipart/form-data" },
      //   picture: myFile,
      // })
      // .then(console.log);
      // const response = await fetch("http://localhost:4000/pictures/", {
      //   body: formData,
      //   method: "POST",
      //   headers: {'Content-Type': 'multipart/form-data' }
      // headers: new Headers({
      //   AuthHeader: "123",
      // }),
      // });
      // const result = await response.json();
      // console.log("result:", result);
      // console.log("Успех:", JSON.stringify(result));
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("picture")} type="file" name="picture" />
            <button>Submit</button>
          </form> */}
      {/* <form enctype="multipart/form-data"> */}
      <form id="formElem" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
          <input
            {...register("picture")}
            type="file"
            id="image_uploads"
            name="picture"
            accept="image/*"
            multiple
          />
        </div>
        <div class="preview">
          <p>No files currently selected for upload</p>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

const CreativeWorkshop = () => {
  return (
    <div className={styles.creativeWorkshop}>
      <h2>Hello from CreativeWorkshop</h2>
      <AppMaxIvan />
      <AppLearn />
      <AppFormik />
    </div>
  );
};

export default CreativeWorkshop;
