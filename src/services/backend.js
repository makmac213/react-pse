import axios from "axios";

const backend = axios.create({
  baseURL: "http://phisix-api.appspot.com",
});

backend.interceptors.response.use(response => {
  return response;
}, error => {
  console.log("Axios interceptor error: ", error);
  // [400, 401, 403, 404, 500] use history.push
});

export default backend;