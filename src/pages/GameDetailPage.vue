<script>
import axios from "axios";
import GameCard from "../components/games/GameCard.vue";
const apiBaseUrl = "http://localhost:8000/api/";
export default {
  name: "GameDetailPage",
  components: { GameCard },
  data: () => ({
    game: null,
  }),
  methods: {
    getGame() {
      const endpoint = apiBaseUrl + "games/" + this.$route.params.id;
      axios
        .get(endpoint)
        .then((res) => {
          this.project = res.data;
        })
        .catch(() => {
          this.$router.push({ name: "not-found" });
        });
    },
  },
  created() {
    this.getGame();
  },
  components: { GameCard },
};
</script>

<template>
  <GameCard :game="game" :isDetail="true" />
</template>
