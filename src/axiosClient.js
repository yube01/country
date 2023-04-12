import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://countrycode.dev/api",
});

export default axiosClient;
