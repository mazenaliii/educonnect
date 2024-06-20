import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://ef2f-197-42-165-193.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "any",
  },
});

export default baseUrl;
