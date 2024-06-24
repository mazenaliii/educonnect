import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://0c91-41-38-133-68.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "any",
  },
});

export default baseUrl;
