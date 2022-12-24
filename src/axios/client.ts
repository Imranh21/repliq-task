import axios from "axios";

export const client = axios.create({
  baseURL: "https://internal-pouncing-beetle.glitch.me",
});
