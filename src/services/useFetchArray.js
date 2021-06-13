// export function getList() {
//   return fetch("http://localhost:4000/homeitems").then((data) => data.json());
// }

// export function setItem(item) {
//   return fetch("http://localhost:4000/homeitems", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(item),
//   }).then((data) => data.json());
// }

// export function removeItemFetch(itemId) {
//   return fetch(`http://localhost:4000/homeitems/${itemId}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(itemId),
//   }).then((data) => data.json());
// }

import axios from "axios";

const API_BASE_URL = "http://localhost:4001";
const API_URL = "http://localhost:4001/homeitems";
const API_URL_IMAGES = "http://localhost:4001/files/files";

export const createItem = async (homeitems) => {
  const { data: newItem } = await axios.post(`${API_URL}/`, homeitems);
  return newItem;
};

export const createImage = async (formData) => {
  console.log("imageInputFetch111111:", formData);

  // const config = {
  //   headers: {
  //     "Contetnt-Type": "multipart/form-data",
  //   },
  // };

  // const { data: newImage } = await axios.post(API_URL, imageInput, config);
  // const newImage = await axios.post(API_URL, imageInput, config);
  const newImage = await axios.post(`${API_BASE_URL}/files/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("newImage:", newImage);

  return newImage;
};

export const deleteItem = async (id) => {
  console.log("id:", id);
  const message = await axios.delete(`${API_URL}/${id}`);
  return message;
};

export const updateTodo = async (payload) => {
  const { data: newTodo } = await axios.put(`${API_URL}`, payload);
  return newTodo;
};

export const getAllItems = async () => {
  const { data } = await axios.get(`${API_URL}/`);
  // console.log("data:", data);
  return data;
};

export const getAllImages = async () => {
  const { data } = await axios.get(API_URL_IMAGES);
  return data;
};

// export default { createItem, deleteTodo, updateTodo, getAllTodos };
