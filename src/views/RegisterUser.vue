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
      <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
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
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
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
