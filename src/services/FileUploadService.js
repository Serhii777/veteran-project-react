import http from "./http-common";

const upload = (file, onUploadProgress) => {
  console.log("fileHttp:", file);

  let formData = new FormData();

  formData.append("file", file);

  return http.post("http://localhost:4001/files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("http://localhost:4001/files/files");
};

const FileUploadService = {
  upload,
  getFiles,
};

export default FileUploadService;
