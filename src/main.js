import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apiClient from "@/services/ApiClient";

import "nprogress/nprogress.css";

// Register global components
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const userString = localStorage.getItem("user"); // grab user data from local storage
    if (userString) {
      // check to see if there is indeed a user
      const userData = JSON.parse(userString); // parse user data into JSON
      this.$store.commit("SET_USER_DATA", userData); // restore user data with Vuex
    }

    apiClient.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          // if we catch a 401 error
          this.$store.commit("LOGOUT"); // force a log out
        }
        return Promise.reject(error); // reject the Promise, with the error as the reason
      }
    );
  },
  render: (h) => h(App),
}).$mount("#app");
