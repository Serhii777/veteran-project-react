import axios from "axios";
import { API_URL_CONTACT } from "../apiUrl";


export const createContent = async (data) => {
  console.log("data:", data);

  const { data: newItem } = await axios.post(
    `${API_URL_CONTACT}/`,
    data
  );
  return newItem;
};

export const getContent = async () => {
  const { data } = await axios.get(API_URL_CONTACT);
  return data;
};

export const deleteContacts = async (id) => {
  const message = await axios.delete(`${API_URL_CONTACT}/${id}`);
  return message;
};
