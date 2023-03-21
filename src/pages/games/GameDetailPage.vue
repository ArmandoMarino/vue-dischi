<script>
import axios from "axios";
import GameCard from "../../components/games/GameCard.vue";
const apiBaseUrl = "http://localhost:8000/api/";
export default {
  name: "GameDetailPage",
  components: { GameCard },
  data: () => ({
    game: {},
  }),
  methods: {
    getGame() {
      const endpoint = apiBaseUrl + "games/" + this.$route.params.id;
      axios
        .get(endpoint)
        .then((res) => {
          this.game = res.data;
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
  <section class="game-detail">
    <GameCard :game="game" :isDetail="true" />
  </section>
</template>

<style scoped lang="scss">
.game-detail {
  margin-top: 100px;
}
</style>
