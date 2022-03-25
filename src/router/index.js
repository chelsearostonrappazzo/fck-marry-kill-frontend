import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MostLikely from "../views/MostLikely.vue";
import FckMarryKill from "../views/FMK.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mostlikely",
    name: "mostlikely",
    component: MostLikely,
  },
  {
    path: "/fckmarrykill:",
    name: "fckmarrykill",
    component: FckMarryKill,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
