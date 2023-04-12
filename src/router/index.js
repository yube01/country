import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import SearchByLetter from "../page/SearchByLetter.vue";
import SearchByNames from "../page/SearchByNames.vue";
import SearchByIngredients from "../page/SearchByIngredients.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },

  {
    path: "/by-letter/:letter?",
    name: "byLetter",
    component: SearchByLetter,
  },
  {
    path: "/by-name/:name?",
    name: "byName",
    component: SearchByNames,
  },
  {
    path: "/by-ingredient/:ingredients?",
    name: "byIngredient",
    component: SearchByIngredients,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
