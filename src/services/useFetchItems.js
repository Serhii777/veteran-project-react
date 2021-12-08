import axios from "axios";

export const createItem = async (URL, value) => {
  // console.log("URLCreateItem: ", URL);
  // console.log("valueCreateItem: ", value);
  const { data: newItem } = await axios.post(`${URL}/`, value);
  return newItem;
};

export const createAttentionitem = async (values) => {
  const { data: newItem } = await axios.post(
    `${values.URL}/`,
    values.attentionitems
  );
  return newItem;
};

export const deleteItem = async (URL, id) => {
  // console.log("idDeleteItem:", id);
  const message = await axios.delete(`${URL}/${id}`);
  return message;
};

export const getAllItems = async (URL) => {
  const { data } = await axios.get(`${URL}/`);
  // console.log("dataGetAllItems:", data);
  return data;
};
