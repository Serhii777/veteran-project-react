import axios from "axios";
import { API_URL_LEGALITEM } from "../apiUrl";


export const createItem = async (legalitems) => {
  console.log("legalitems:", legalitems);

  const { data: newItem } = await axios.post(
    `${API_URL_LEGALITEM}/`,
    legalitems
  );
  return newItem;
};

export const getAllItems = async () => {
  const { data } = await axios.get(`${API_URL_LEGALITEM}/`);
  console.log("data:", data);
  return data;
};

export const deleteItem = async (id) => {
  const message = await axios.delete(`${API_URL_LEGALITEM}/${id}`);
  return message;
};
