import axios from "axios";

const request = axios.create();

const requestItr = request.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => Promise.reject(error),
);

const responseItr = request.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => Promise.reject(error),
);

export { requestItr, responseItr };
export default request;
