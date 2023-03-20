// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare

import HomePage from "../pages/HomePage.vue";

// import NotFoundPage from '../pages/NotFoundPage.vue';

// Creo il Router e definisco le rotte
const router = createRouter({
  // History delle pagine
  history: createWebHistory(),
  // Importo la classe da avere in active
  linkActiveClass: "active",

  // Rotte che useremo
  routes: [
    { path: "/", name: "home", component: HomePage },
    // { path: '/contact', name: 'contact', component: ContactPage },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
