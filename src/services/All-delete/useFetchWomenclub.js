import axios from "axios";
import { API_URL_WOMEN_CLUB } from "../apiUrl";


export const createItem = async (value) => {
//   console.log("valuePsychologicals:", value);

  const { data: newItem } = await axios.post(
    `${API_URL_WOMEN_CLUB}/`,
    value
  );
  return newItem;
};

export const getAllItems = async () => {
  const { data } = await axios.get(`${API_URL_WOMEN_CLUB}/`);
//   console.log("data:", data);
  return data;
};

export const deleteItem = async (id) => {
  const message = await axios.delete(`${API_URL_WOMEN_CLUB}/${id}`);
  return message;
};