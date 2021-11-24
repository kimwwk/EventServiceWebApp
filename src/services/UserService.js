import apiClient from "./ApiClient";

export default {
  register(credentials) {
    return apiClient.post("/register", credentials);
  },
  registerSuccess(token) {
    apiClient.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
};
