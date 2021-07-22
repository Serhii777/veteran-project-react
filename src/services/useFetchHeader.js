import axios from "axios";
import { API_URL_HEADERITEM } from "./apiUrl";


export const createHeaderitem = async (homeitems) => {
  console.log("homeitems:", homeitems);

  const { data: newItem } = await axios.post(
    `${API_URL_HEADERITEM}/`,
    homeitems
  );
  return newItem;
};

export const getHeaderitem = async () => {
  const { data } = await axios.get(API_URL_HEADERITEM);
  return data;
};

export const deleteHeaderitem = async (id) => {
  const message = await axios.delete(`${API_URL_HEADERITEM}/${id}`);
  return message;
};
