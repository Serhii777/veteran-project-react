import axios from "axios";
import { API_URL_ANNOUNCEMENTS } from "./apiUrl";


export const createItem = async (value) => {
//   console.log("valuePsychologicals:", value);

  const { data: newItem } = await axios.post(
    `${API_URL_ANNOUNCEMENTS}/`,
    value
  );
  return newItem;
};

export const getAllItems = async () => {
  const { data } = await axios.get(`${API_URL_ANNOUNCEMENTS}/`);
//   console.log("data:", data);
  return data;
};

export const deleteItem = async (id) => {
  const message = await axios.delete(`${API_URL_ANNOUNCEMENTS}/${id}`);
  return message;
};