import axios from "axios";

export const BrowserRest = axios.create({
  baseURL: `${process.env.NEXTAUTH_URL || ""}/api`,
});
