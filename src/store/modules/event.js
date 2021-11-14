import EventService from "@/services/EventService.js";
import router from "@/router";

export const state = {
  events: [],
  event: {},
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        commit("ADD_EVENT", event);
        // show success on notification
        const notification = {
          type: "success",
          message: "New event created",
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch((error) => {
        // show error on notification
        const notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message,
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then((response) => {
        commit("SET_EVENTS", response.data);
      })
      .catch((error) => {
        // show error on next page
        if (error.response && error.response.status == 404) {
          router.push({ name: "404", params: { resource: "event" } });
        } else {
          router.push({ name: "network-issue" });
        }
      });
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id); // See if we already have this event

    if (event) {
      // If we do, set the event
      commit("SET_EVENT", event);
    } else {
      // If not, get it with the API.
      return EventService.getEvent(id)
        .then((response) => {
          commit("SET_EVENT", response.data);
        })
        .catch((error) => {
          // show error on next page
          if (error.response && error.response.status == 404) {
            router.push({ name: "404", params: { resource: "event" } });
          } else {
            router.push({ name: "network-issue" });
          }
        });
    }
  },
};

export const getters = {
  catLength: (state) => {
    return state.categories.length;
  },
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id === id);
  },
};
