import axios from "axios";
import { API_BASE_URL, HOMEITEMS_URL, API_URL_IMAGES } from "./apiUrl";


export const createItem = async (homeitems) => {
  const { data: newItem } = await axios.post(`${HOMEITEMS_URL}/`, homeitems);
  return newItem;
};

export const createImage = async (formData) => {
  console.log("imageInputFetch111111:", formData);

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
  const message = await axios.delete(`${HOMEITEMS_URL}/${id}`);
  return message;
};

// export const updateTodo = async (payload) => {
//   const { data: newTodo } = await axios.put(`${API_URL}`, payload);
//   return newTodo;
// };

export const getAllItems = async () => {
  const { data } = await axios.get(`${HOMEITEMS_URL}/`);
  // console.log("data:", data);
  return data;
};

export const getAllImages = async () => {
  const { data } = await axios.get(API_URL_IMAGES);
  return data;
};

// export default { createItem, deleteTodo, updateTodo, getAllTodos };
