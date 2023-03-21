<script>
import GameCard from "./GameCard.vue";
export default {
    name: "GamesList",
    components: { GameCard },
    props: { games: Array },
};
</script>

<template>
    <section id="games-list">
        <h1>Videogames</h1>
        <div class="row g-3" v-if="games.length">
            <game-card v-for="game in games" :key="game.id" :game="game">
                {{ game.title }}
            </game-card>
        </div>
        <h3 v-else class="text-center">No games available</h3>
    </section>
</template>
