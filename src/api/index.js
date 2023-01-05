import axios from "axios";

const api = axios.create({
  baseURL: "http://141.136.47.227:4444/dev/",
});

export default api;
