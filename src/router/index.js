import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import CountryList from "../page/CountryList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/letter/:letter",
    name: "byLetter",
    component: CountryList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
