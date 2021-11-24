import UserService from "@/services/UserService";
import router from "@/router";

export const state = {
  user: null,
};

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    localStorage.setItem("user", JSON.stringify(userData));
  },
};

export const actions = {
  // eslint-disable-next-line no-unused-vars
  register({ commit }, credentials) {
    return UserService.register(credentials).then((response) => {
      const data = response.data;
      console.log(data);
      commit("SET_USER_DATA", data);
      UserService.registerSuccess(data.token);
      router.push({ name: "event-list" });
    });
  },
};
