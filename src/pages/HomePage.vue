<script>
import axios from "axios";
import GamesList from "../components/games/GamesList.vue";
// Server PHP Laravel con /api !
const apiBaseUrl = 'http://127.0.0.1:8000/api'
export default {
  name: "HomePage",
  components: {
    GamesList,
    // AppAlert,
    // AppPagination
  },
  data: () => ({
    // isLoading: false,
    // isALertOpen: false,
    // Mettere tutto sotto la stessa chiave cosi con il Destructuring(sotto) prenderò gli elementi parlanti es : project.links
    games: {
      data: [],
      links: []
    },
  }),
  methods: {
    fetchGames(endpoint = null) {
      // Loading alla chiamata a true(on)
      this.isLoading = true;
      // Se l'endpoint non me lo dai sarà basico altrimenti se me lo passi andrà dove gli diremo noi ( link.url che sara la pagina succ o previous)
      if (!endpoint) endpoint = apiBaseUrl + '/games';
      axios.get(endpoint).then(res => {
        // Destructuring : tiro fuori data e links da res.data e lo riassegno in project dando solo data e links che sono vuoti inizialmente
        const { data, links } = res.data;
        this.games = { data, links };

        // In res.data arrivano i dati della chiamata da axios 
        this.games = res.data;
      })
        // Controllo con catch se ci sono errori e nel caso l'alert sarà true (on)
        .catch((err) => {
          this.isALertOpen = true;
          console.error(err);
        })
        // Loading a chiamata finita a false (off)
        .then(() => {
          this.isLoading = false;
        })
    }
  },
  created() {
    this.fetchGames();
  }
};
</script>

<template>
  <div class="container">
    <h1>Videogames</h1>
    <games-list :games="games.data"></games-list>
  </div>
</template>
