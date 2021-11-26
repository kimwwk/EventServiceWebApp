<template>
  <div>
    <h1>Welcome!</h1>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link to="/login"> Login </router-link>
      or
      <router-link to="/register"> Register </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers.js";

export default {
  name: "Home",
  computed: {
    ...authComputed,
  },
};
</script>
