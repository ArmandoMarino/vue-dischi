// Importo le funzioni di Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine che voglio usare

import HomePage from "../pages/HomePage.vue";
import ContactPage from '../pages/ContactPage.vue';

import GameDetailPage from "../pages/games/GameDetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import EditorGamesPage from '../pages/games/EditorGamesPage.vue';

// Creo il Router e definisco le rotte
const router = createRouter({
    // History delle pagine
    history: createWebHistory(),
    // Importo la classe da avere in active
    linkActiveClass: "active",

    // Rotte che useremo
    routes: [
        { path: "/", name: "home", component: HomePage },

        // Contact page form
        { path: '/contact', name: 'contact', component: ContactPage },

        //Rotta per lo show del game con ID
        { path: "/games/:id", name: "game-detail", component: GameDetailPage },

        //Rotta per il recupero dei projects appartenenti a un editor
        { path: '/editor/:id/games', name: 'editor-games', component: EditorGamesPage },

        // NotFoundPage
        { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
    ],
});

export { router };
