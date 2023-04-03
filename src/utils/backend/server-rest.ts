import axios from "axios";

export const ServerRest = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api`,
});
