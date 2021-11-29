import axios from "axios";
import { API_URL_SOCIOADVICES } from "../apiUrl";


export const createItem = async (value) => {
//   console.log("valuePsychologicals:", value);

  const { data: newItem } = await axios.post(
    `${API_URL_SOCIOADVICES}/`,
    value
  );
  return newItem;
};

export const getAllItems = async () => {
  const { data } = await axios.get(`${API_URL_SOCIOADVICES}/`);
//   console.log("data:", data);
  return data;
};

export const deleteItem = async (id) => {
  const message = await axios.delete(`${API_URL_SOCIOADVICES}/${id}`);
  return message;
};