<template>
  <div>
    <h1>Create an Event, {{ userName }}</h1>
    <p>This event is created by {{ userName }}</p>
    <form @submit.prevent="createNewEvent">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
        class="field"
      />
      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        type="text"
        placeholder="Add a title"
        v-model="event.title"
        class="field"
      />
      <BaseInput
        label="Description"
        type="text"
        placeholder="Add a description"
        v-model="event.description"
        class="field"
      />
      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        type="text"
        placeholder="Add a location"
        v-model="event.location"
        class="field"
      />
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <BaseSelect
        label="Select a time"
        :options="times"
        v-model="event.time"
        class="field"
      />
      <!-- <input type="submit" class="button -fill-gradient" value="Submit" /> -->
      <BaseButton type="submit" buttonClass="-fill-gradient">Submit</BaseButton>
    </form>
  </div>
</template>
<script>
// was recommended to use vue-multiselect for select object
import { mapState, mapGetters } from "vuex";
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker,
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      event: this.createFreshEvent(),
      times,
      // categories: this.$store.state.categories,
    };
  },
  methods: {
    createNewEvent() {
      this.$store
        .dispatch("createEvent", this.event)
        .then(() => {
          this.$router.push({
            name: "event-show",
            params: { id: this.event.id },
          });
          this.event = this.createFreshEventObject();
        })
        .catch(() => {
          console.log("There was a problem creating your event.");
        });
    },
    createFreshEvent() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        category: "",
        organizer: user,
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        attendees: [],
      };
    },
  },
  computed: {
    ...mapGetters(["catLength", "getEventById"]),
    // Equal to
    // catLength() {
    //   return this.$store.getters.catLength;
    // },
    // getEventById() {
    //   return this.$store.getters.getEventById;
    // },
    ...mapState({
      userName: (state) => state.user.user.name,
      categories: "categories",
      // Euqual to
      // categories: (state) => state.categories,
    }),
    // Aslo Equal to
    // computed: mapState(["user", "categories"]);
  },
};
</script>
<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
