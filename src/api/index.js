import axios from "axios";

const api = axios.create({
  baseURL: "http://185.182.187.223:4444/dev/",
  // baseURL : "https://jsonplaceholder.typicode.com/"
});

export default api;
