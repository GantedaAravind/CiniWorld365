import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Replace with your base URL
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_AUTHORIZATION,
  },
  timeout: 15000,
  method: "GET", // Default method can be set here, if desired
});

export default axiosInstance;
