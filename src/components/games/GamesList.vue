<script>
import GameCard from "./GameCard.vue";
export default {
  name: "GamesList",
  components: { GameCard },
  props: { games: Array, editor: Object },
};
</script>

<template>
  <section id="games-list">
    <!-- IMG BANNER -->
    <div
      id="img-banner"
      class="text-white text-center mb-5 d-flex justify-content-center align-items-center"
    >
      <h1 v-if="editor?.label" class="content">
        <em>{{ editor.label }}</em>
      </h1>
      <h1 v-else class="content"><em>Videogames Store</em></h1>
    </div>

    <div class="container">
      <div class="row justify-content-center g-3" v-if="games.length">
        <!-- CARD -->
        <game-card v-for="game in games" :key="game.id" :game="game">
          {{ game.title }}
        </game-card>
      </div>
      <h3 v-else class="text-center text-white">No games available</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">
#img-banner {
  height: 200px;
  width: 100%;
  margin-top: 70px;
  background-image: url(../../assets/img/banner-2.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    color: white;
    font-family: "Press Start 2P", cursive;
    font-size: 3rem;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
      0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
}
</style>
