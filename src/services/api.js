import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.VITE_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});
