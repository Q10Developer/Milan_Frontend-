import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4444/dev/",
});

export default api;
