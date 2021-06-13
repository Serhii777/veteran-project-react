import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import axios from "axios";
// import { changeimagesUrl } from "../../../services/apiUrl";

const getImages = async () => {
  // const { data } = await axios.get(changeimagesUrl);
  const { data } = await axios.get("http://localhost:4001/files/photos");
  console.log("dataFromGetFetch:", data);
  return data;
};

// const setImages = (imageRaw) => {
// const setImages = (formData) => {
//   fetch("http://localhost:4000/changeimages", {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     // formData,
//     body: formData,
//     // body: imageRaw,
//   })
//     .then((res) => {
//       console.log("res:", res);
//     })
//     .catch((error) => {
//       console.log("error:", error);
//     });
// };

function FormChangeImage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState({ preview: "", raw: "" });
  // const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    getImages().then((items) => {
      console.log("itemsComponent:", items);
      setImage(items);
    });
  }, []);

  // const handleChange = (event) => {
  //   if (event.target.files.length) {
  //     console.log("e.target.files[0]", event.target.files[0]);

  //     setImage({
  //       preview: URL.createObjectURL(event.target.files[0]),
  //       raw: event.target.files[0],
  //     });

  //     setSelectedFile(event.target.files[0]);
  //   }
  // };
  // console.log("imageRaw", imageRaw);

  // const imageRaw = image.raw;

  // console.log("imageRaw", imageRaw);

  // const handleUpload = async (e) => {
  //   // e.preventDefault();

  //   console.log("selectedFile:", selectedFile);

  // const resultBinaryData = await axios.post(
  //   "http://localhost:4000/changeimages",
  //   selectedFile,
  //   {
  //     onUploadProgress: (progressEvent) => {
  //       console.log("progressEvent:", progressEvent.loaded / progressEvent.total);
  //     },
  //   }
  // );
  // console.log("resultBinaryData:", resultBinaryData);

  // const formData = new FormData();
  // formData.append("myFile", selectedFile, selectedFile.name);

  // const resultBinaryData = await axios.post(
  //   "http://localhost:4000/file-upload",
  //   formData,
  //   {
  //     onUploadProgress: (progressEvent) => {
  //       console.log(
  //         "progressEvent:",
  //         progressEvent.loaded / progressEvent.total
  //       );
  //     },
  //   }
  // );
  // console.log("resultBinaryData:", resultBinaryData);
  // };

  const onSubmit = async (data) => {
    console.log("dataOnSubmit:", data);
    console.log("dataOnSubmit.picture[0]:", data.picture[0]);

    const inputValue = data.picture[0];

    const formData = new FormData();
    formData.append("image", inputValue);
    // formData.append("picture", data.picture);

    if (inputValue) {
      formData.append("image", inputValue);
    }

    const resultSet = await fetch("http://localhost:4001/pictures", {
      method: "POST",
      body: { formData },
      headers: {
        "content-type": `multipart/form-data; boundary=${inputValue._boundary}`,
      },
    })
      .then((res) => {
        res.json();

        console.log("resSet:", res);

        alert(JSON.stringify(res));
      })
      .catch((error) => {
        console.log("error:", error);
      });

    console.log("resultSet:", resultSet);
  };

  // setImages(imageRaw);
  // setImages(formData);
  // };

  return (
    //  {/* <div>
    //  <label htmlFor="upload-button">
    //     {image.preview ? (
    //       <img src={image.preview} alt="dummy" width="300" height="300" />
    //     ) : (
    //       <div>
    //         <h5 className="text-center">Upload your photo</h5>
    //       </div>
    //     )}
    //   </label>
    //   <input
    //     ref={register}
    //     type="file"
    //     name="picture"
    //     id="upload-button"
    //     onChange={handleChange}
    //   />
    //   <br />
    //   <button onClick={handleUpload}>Upload (Save)</button>
    // </div>*/}

    <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register("picture")} type="file" />
      {errors.message && errors.message.message}
      <button>Submit</button>
    </form>
  );
}

export default FormChangeImage;
