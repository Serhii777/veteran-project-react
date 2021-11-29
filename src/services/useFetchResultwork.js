import axios from "axios";

export const createItem = async (URL, value) => {
  console.log("valueresultworks:", value);

  const { data: newItem } = await axios.post(`${URL}/`, value);
  return newItem;
};

export const getAllItemsPagin = async (URL, params) => {
  // console.log("params:", params); //* params: {page: 0, size: 1}
  const { data } = await axios.get(`${URL}/params`, { params });
  console.log("data:", data);
  return data;
};

export const getAllItems = async (URL, pageNum, pageSize) => {
  const params = { page: pageNum, size: pageSize };
  // console.log("paramsFetch111111111111111:", params); //* params: {page: 0, size: 1}
  const { data } = await axios.get(`${URL}`, { params });
  // console.log("data:", data);
  return data;
};

export const deleteItem = async (URL, id) => {
  return await axios.delete(`${URL}/${id}`);
};

export const findByTitle = (URL, title) => {
  return axios.get(`${URL}/?title=${title}`);
};

// import http from "../http-common";

// const getAll = (params) => {
//   return http.get("/tutorials", { params });
// };

// const get = id => {
//   return http.get(`/tutorials/${id}`);
// };

// const create = data => {
//   return http.post("/tutorials", data);
// };

// const update = (id, data) => {
//   return http.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return http.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return http.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

// export default {
//   getAll,
//   get,
//   create,
//   update,
//   remove,
//   removeAll,
//   findByTitle
// };
