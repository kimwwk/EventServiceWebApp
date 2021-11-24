import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisterUser from "../views/RegisterUser.vue";
import EventShow from "../views/EventShow.vue";
import EventList from "../views/EventList.vue";
import EventCreate from "../views/EventCreate.vue";
import NotFound from "../views/NotFound.vue";
import NetworkIssue from "../views/NetworkIssue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/register",
    name: "register-user",
    component: RegisterUser,
  },
  {
    path: "/event-show/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/event-create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    alias: "/about-us2",
  },
  {
    path: "/about-us",
    redirect: "/about",
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "*",
    redirect: { name: "404", params: { resource: "page" } },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
