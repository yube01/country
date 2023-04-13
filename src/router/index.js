import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import SearchByLetter from "../page/SearchByLetter.vue";
import SearchByNames from "../page/SearchByNames.vue";
import SearchByIngredients from "../page/SearchByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
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
    ],
  },
  {
    path: "/auth",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
