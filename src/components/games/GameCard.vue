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
            const abstract = this.game.description.slice(0, 70);
            return abstract + "...";
        },
        changeVideoPath() {
            let videoUrl = this.game.video_trailer;

            let videoId = videoUrl.substring(
                videoUrl.indexOf("=") + 1,
                videoUrl.lastIndexOf("&")
            );

            let finalUrl = 'https://www.youtube.com/embed/' + videoId;
            return finalUrl;
        }
    },
};
</script>

<template>
    <div class="my-4 text-center" :class="
        isDetail ? 'col-11 mx-auto my-card-detail' : 'col-lg-3 col-md-6 col-sm-10'
    ">
        <!-- ROUTER -->
        <div class="card h-100" :class="isDetail ? 'my-card-detail' : 'my-card-list p-3'"
            :style="isDetail ? { backgroundImage: 'url(' + game.banner_image + ')' } : { backgroundImage: 'url(' + game.image + ')' }">
            <div class="h-100" :class="isDetail ? 'show' : 'overlay'">
                <!--* IMAGE -->
                <!-- <img v-if="game.image" :src="game.image" class="card-img-top img-fluid" :alt="game.title"> -->
                <div class="h-100 d-flex flex-column justify-content-between">

                    <!--* TITLE -->
                    <p :class="isDetail ? 'h1' : 'card-title'">{{ game.title }}</p>

                    <!--TODO EDITOR -->
                    <!-- da router  il v-if qui è MOLTO importante -->
                    <router-link v-if="game.editor" :to="{ name: 'editor-games', params: { id: game.editor.id } }">
                        <span class="badge" :style="{ backgroundColor: game.editor.color }">
                            {{ game.editor.label }}
                        </span>
                    </router-link>

                    <!--* VIDEO TRAILER -->
                    <div class="d-flex">
                        <iframe v-if="isDetail" width="560" height="315" class="col-6" :src="this.changeVideoPath"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>



                        <!--* DESCRIPTION -->
                        <p>
                            {{ isDetail ? game.description : abstractDescription }}
                        </p>

                    </div>

                    <!--* GENRES -->
                    <div class="genres">
                        <h2 class="mb-4">Genres:</h2>
                        <div class="d-flex fs-6 justify-content-center flex-wrap align-items-center">
                            <span v-if="game.genres.length" v-for="genre in game.genres"
                                :style="{ backgroundColor: genre.color }" :key="genre.id" class="badge m-1">
                                {{ genre.label }}
                            </span>
                            <span v-else>
                                <p>No Genres Assigned Yet</p>
                            </span>
                        </div>
                        <!--* ROUETR TO SHOW -->
                        <router-link v-if="!isDetail" class="btn btn-primary btn-sm text-white"
                            :to="{ name: 'game-detail', params: { id: game.id } }">
                            Show detail
                        </router-link>
                    </div>
                    <!--* CARD FOOTER -->
                    <div v-if="isDetail" class="d-flex justify-content-between align-items-center">
                        <!-- UPDATED & PUBLISHED -->
                        <p>Pubblished at : {{ gameDateCreated }}</p>
                        <p>Updated at : {{ gameDateUpdated }}</p>
                    </div>
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

.card {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1rem;
    min-height: 300px;
    // font-family: cursive;
}

.card .show {
    color: white;
    text-shadow: black 1px 2px;
}

.card:hover {
    color: white;
    text-shadow: black 1px 2px;
    transition: color 1.4s, text-shadow 1.4s;
}

.card .show .genres {
    opacity: 1;
}

.card .genres {
    opacity: 0;
}

.card:hover .genres {
    opacity: 1;
    transition: opacity 1.4s;
}

.card .overlay {
    color: rgba(255, 255, 255, 0);
}

.card .show {
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    padding: 0;
}

.card:hover .overlay {
    border-radius: 25px;
    color: white;
    text-shadow: black 1px 2px;
    transition: color 1.4s, text-shadow 1.4s;
    background-color: rgba(0, 0, 0, 0.2);
}

.card:hover:before,
.card:hover:after {
    animation: none;
    opacity: 0;
}

.my-card-list::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate),
            #5ddcff,
            #3c67e3 43%,
            #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.my-card-list::after {
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
    background-color: rgba(0, 0, 0, 0.3);

    opacity: 1;
    transition: opacity 0.5s;
    animation: spin 2.5s linear infinite;
}

.my-card-detail {
    min-height: 100%;
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
