<script>
import GameCard from "./GameCard.vue";
export default {
  name: "GamesList",
  components: { GameCard },
  props: { games: Array },
};
</script>

<template>
  <section id="games-list" class="row my-4">
    <div v-if="games.length">
      <game-card v-for="game in games" :key="game.id" :game="game">
        {{ game.title }}
      </game-card>
    </div>
    <h3 v-else class="text-center">No games available</h3>
  </section>
</template>
