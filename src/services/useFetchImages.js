import axios from "axios";

export const createItem = async (value, url) => {
  const { data: newItem } = await axios.post(`${url}/`, value);
  return newItem;
};

export const getAllItems = async (url) => {
  const { data } = await axios.get(`${url}/`);
  return data;
};

export const deleteItem = async (url, id) => {
  const message = await axios.delete(`${url}/${id}`);
  // console.log("messageImages:", message);
  return message;
};
