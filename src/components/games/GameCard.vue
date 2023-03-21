<script>
export default {
    name: "GameCard",
    props: {
        game: Object,
        isDetail: Boolean,
    },
    computed: {
        gameDateUpdated() {
            const date = new Date(this.game.updated_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Fix zero bug
            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
        },
        gameDateCreated() {
            const date = new Date(this.game.created_at);
            let day = date.getDay();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Fix zero bug
            if (day < 10) day = "0" + day;
            if (month < 10) month = "0" + month;

            return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds} `;
        },
        abstractDescription() {
            const abstract = this.game.description.slice(0, 200);
            return abstract + "...";
        },
    },
};
</script>

<template>
    <div class="col-lg-3 my-4 text-center">
        <div class="p-3 card h-100 ">
            <!--* IMAGE -->
            <!--TODO <img v-if="game.image" :src="game.image" class="card-img-top img-fluid" :alt="game.title"> -->
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">{{ game.title }}</h5>

                <!--TODO EDITOR -->
                <!-- da router  il v-if qui è MOLTO importante -->
                <!-- <router-link v-if="game.editor" :to="{ name: 'editor-games', params: { id: game.editor.id } }">
                                                                                                                                                            <span class="badge" :style="{ backgroundColor: game.editor.color }">
                                                                                                                                                                {{ game.editor.label }}
                                                                                                                                                            </span>
                                                                                                                                                        </router-link> -->

                <!--*TODO metterla nello show ABSTRACT | DESCRIPTION -->
                <p class="card-text">
                    {{ isDetail ? game.description : abstractDescription }}
                </p>


                <!--* CARD FOOTER -->
                <div class="card-footer">
                    <!-- UPDATED & PUBLISHED -->
                    <p>Pubblished at : {{ gameDateCreated }}</p>
                    <p>Updated at : {{ gameDateUpdated }}</p>
                    <!-- GENRES -->
                    <span v-for="genre in game.genres" :class="`text-bg-${genre.color}`" :key="genre.id" class="badge">
                        {{ genre.label }}
                    </span>
                    <!--TODO BUTTON TO DETAILS inglobiamo tutto come overlay and hover per lo show -->
                    <!-- <router-link v-if="!isDetail" :to="{ name: 'game-detail', params: { id: game.id } }"
                                                                                                                                                                                            class="btn btn-primary">
                                                                                                                                                                                            Show details
                                                                                                                                           </router-link> -->
                </div>
            </div>
        </div>

    </div>
</template>


<style scoped lang="scss">
.card-footer {
    font-size: 12px;
}

@property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
}

:root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
}


body {
    min-height: 100vh;
    background: #212534;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;
    box-sizing: border-box;
}


.card {
    background: #191c29;
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    // font-family: cursive;
}

.card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
}

.card:hover:before,
.card:hover:after {
    animation: none;
    opacity: 0;
}


.card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.card::after {
    position: absolute;
    content: "";
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
    0% {
        --rotate: 0deg;
    }

    100% {
        --rotate: 360deg;
    }
}

a {
    color: #212534;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    margin-top: 2rem;
}
</style>

