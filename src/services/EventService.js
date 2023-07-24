// temp static app event server
import axios from "axios";
import NProgress from "nprogress";

const apiClient = axios.create({
  baseURL: "./", // Changed to the local directory
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});
apiClient.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default {
  async getEvents(perPage, page) {
    const response = await apiClient.get("db.json");
    return {
      data: response.data.events.slice((page - 1) * perPage, page * perPage),
    };
  },
  async getEvent(id) {
    const response = await apiClient.get("db.json");
    return response.data.events.find((event) => event.id === id);
  },
  /* eslint-disable no-unused-vars */
  postEvent(event) {
    // Do nothing
  },
};
