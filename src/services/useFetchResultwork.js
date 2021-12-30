import axios from "axios";

export const createItem = async (URL, value) => {
  // console.log("valueresultworks:", value);

  const { data: newItem } = await axios.post(`${URL}/`, value);
  return newItem;
};

export const getAllItemsPagin = async (URL, params) => {
  const { data } = await axios.get(`${URL}/params`, { params });
  // console.log("data:", data);
  return data;
};

export const getAllItems = async (URL, pageNum, pageSize) => {
  const params = { page: pageNum, size: pageSize };
  const { data } = await axios.get(`${URL}`, { params });
  return data;
};

export const deleteItem = async (URL, id) => {
  return await axios.delete(`${URL}/${id}`);
};

export const findByTitle = (URL, title) => {
  return axios.get(`${URL}/?title=${title}`);
};

