import apiClient from "./ApiClient";
import axios from "axios";

export default {
  register(credentials) {
    return apiClient.post("/register", credentials);
  },
  authSuccess(token) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  login(credentials) {
    return apiClient.post("/login", credentials);
  },
};
