<template>
  <div>
    <form @submit.prevent="login">
      <BaseInput
        label="Email"
        type="email"
        placeholder="enter your email"
        v-model="email"
        class="field"
      />
      <BaseInput
        label="Password"
        type="password"
        placeholder="enter your password"
        v-model="password"
        class="field"
      />
      <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>

      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style></style>
