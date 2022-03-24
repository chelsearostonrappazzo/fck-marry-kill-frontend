import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import CompletedRounds from "../views/CompletedRounds.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/completed:",
  //   name: "completed",
  //   component: CompletedRounds,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
