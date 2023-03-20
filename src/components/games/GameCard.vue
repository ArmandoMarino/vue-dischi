<script>
export default {
    name: 'GameCard',
    props: {
        game: Object,
        isDetail: Boolean,
    },
    // computed: {
    //     gameDateUpdated() {
    //         const date = new Date(this.game.updated_at);
    //         let day = date.getDay();
    //         let month = date.getMonth();
    //         const year = date.getFullYear();
    //         const hours = date.getHours();
    //         const minutes = date.getMinutes();
    //         const seconds = date.getSeconds();

    //         // Fix zero bug
    //         if (day < 10) day = "0" + day;
    //         if (month < 10) day = "0" + month;

    //         return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
    //     },
    //     gameDateCreated() {
    //         const date = new Date(this.game.created_at);
    //         let day = date.getDay();
    //         let month = date.getMonth();
    //         const year = date.getFullYear();
    //         const hours = date.getHours();
    //         const minutes = date.getMinutes();
    //         const seconds = date.getSeconds();

    //         // Fix zero bug
    //         if (day < 10) day = "0" + day;
    //         if (month < 10) day = "0" + month;

    //         return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
    //     },
    //     abstractDescription() {
    //         const abstract = this.game.description.slice(0, 300);
    //         return abstract + '...';
    //     }

    // },
};
</script>

<template>
    <div class="card my-4">
        <img v-if="game.image" :src="game.image" class="card-img-top img-fluid" :alt="game.slug">
        <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <!-- EDITOR -->
            <!-- da router  il v-if qui è MOLTO importante -->
            <router-link v-if="game.editor" :to="{ name: 'editor-games', params: { id: game.editor.id } }">
                <span class="badge" :style="{ backgroundColor: game.editor.color }">
                    {{ game.editor.label }}
                </span>
            </router-link>
            <!-- ABSTRACT | DESCRIPTION -->
            <p class="card-text">
                {{ isDetail ? game.description : abstractDescription }}
            </p>
            <div class="card-footer d-flex justify-content-between align-items-center">
                <!-- UPDATED & PUBLISHED -->
                <p>Pubblished at : {{ gameDateCreated }}</p>
                <p>Updated at : {{ gameDateUpdated }}</p>
                <!-- GENRES -->
                <span v-for="genre in game.genres" :style="{ backgroundColor: game.editor.color }"
                    :class="`text-bg-${genre.color}`" :key="genre.id" class="badge">
                    {{ genre.label }}
                </span>
                <!-- BUTTON TO DETAILS -->
                <router-link v-if="!isDetail" :to="{ name: 'game-detail', params: { id: game.id } }"
                    class="btn btn-primary">
                    Show details
                </router-link>
            </div>
        </div>
    </div>
</template>