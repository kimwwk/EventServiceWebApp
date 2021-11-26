<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link v-if="!loggedIn" :to="{ name: 'login-user' }">
        Login
      </router-link>
      <!-- <router-link v-else :to="{ name: 'login-user' }" @click="logout">
        Logout
      </router-link> -->
      <button v-else type="button" class="logoutButton" @click="logout">
        Logout
      </button>
      <!-- <router-link :to="{ name: 'event-create' }">Create</router-link> -->
    </nav>
  </div>
</template>
<script>
import { authComputed } from "../store/helpers.js";

export default {
  name: "Home",
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
