import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
console.log("BACKEND URL:", import.meta.env.VITE_BACKEND_URL);
console.log("BACKEND URL2:", apiClient.defaults.baseURL);

export default apiClient;
