import http from "./http-common";

const getAll = () => {
  return http.get("/v1/incidents");
};

// const get = id => {
//   return http.get(`/Incidents/${id}`);
// };

const create = data => {
  console.log(data);
  return http.post("/v1/incidents", data);
};

const update = (id, data) => {
  return http.patch(`/v1/incidents/${id}`, data);
};

const remove = id => {
  return http.delete(`/v1/incidents/${id}`);
};

export default {
  getAll,
//   get,
  create,
  update,
  remove
//   removeAll,
//   findByTitle
};