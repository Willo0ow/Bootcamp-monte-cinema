import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://127.0.0.1:3000",
});

export default axiosApi;
