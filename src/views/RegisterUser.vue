<template>
  <div>
    <form @submit.prevent="register">
      <BaseInput
        label="Name"
        type="text"
        placeholder="enter your name"
        v-model="name"
        class="field"
      />
      <BaseInput
        label="Email"
        type="email"
        placeholder="enter your gmail"
        pattern=".+@gmail\.com"
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
      <ul>
        <li v-for="(error, index) in errors" :key="index">
          <p class="-text-error">{{ error }}</p>
        </li>
      </ul>

      <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>

      <router-link to="/login"> Already have an account? Login. </router-link>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
        });
    },
  },
};
</script>
<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
