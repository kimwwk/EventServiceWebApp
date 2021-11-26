import apiClient from "./ApiClient";

export default {
  register(credentials) {
    return apiClient.post("/register", credentials);
  },
  authorize(token) {
    apiClient.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  login(credentials) {
    return apiClient.post("/login", credentials);
  },
};
