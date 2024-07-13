import axios from "axios";

const baseURL = " http://127.0.0.1:4444";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export { instance };
