<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
    <!-- <input v-model="event.title" type="text" placeholder="Add an event title" /> -->
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: String,
    value: [String, Number], // it could be a string or a number
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
