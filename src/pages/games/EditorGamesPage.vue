<script>
import axios from "axios";
// import AppAlert from '../../components/AppAlert.vue';
import GamesList from "../../components/games/GamesList.vue";
// import AppPagination from '../../components/AppPagination.vue';

// Server PHP Laravel con /api !
const apiBaseUrl = "http://127.0.0.1:8000/api";
export default {
  name: "EditorGamesPage",
  components: {
    GamesList,
    // AppAlert,
    // AppPagination
  },
  data: () => ({
    isLoading: false,
    isALertOpen: false,
    // Mettere tutto sotto la stessa chiave cosi con il Destructuring(sotto) prenderò gli elementi parlanti es : project.links
    games: {},
    editor: null,
  }),
  methods: {
    fetchGames(endpoint = null) {
      // Loading alla chiamata a true(on)
      this.isLoading = true;
      if (!endpoint)
        endpoint = `${apiBaseUrl}/editor/${this.$route.params.id}/games`;
      axios
        .get(endpoint)
        .then((res) => {
          this.games = res.data.editor.games;
          this.editor = res.data.editor;
        })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          this.isALertOpen = true;
          console.error(err);
        })
        // Loading a chiamata finita a false (off)
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.fetchGames();
  },
};
</script>

<template>
  <app-alert :is-open="isALertOpen" @close="isALertOpen = false"></app-alert>
  <!-- AppLoader importato globalmente in main.js si vedrà (v-if) solo se isLoading sarà true -->
  <!-- TODO <h3>{{ editor?.label }} VideoGames</h3> -->
  <app-loader v-if="isLoading"></app-loader>
  <!-- ALtrimenti v-else vai vedere la gamesList -->
  <games-list v-else :games="games" :editor="editor"></games-list>
  <!-- <app-pagination v-if="!isLoading" :links="games.links" @change-page="fetchGames"></app-pagination> -->
</template>
