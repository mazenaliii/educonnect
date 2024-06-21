import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://6d61-102-46-183-188.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "any",
  },
});

export default baseUrl;
