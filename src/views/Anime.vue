<template>
    <div>
        <div class="d-flex flex-row my-3">
            <div class="mx-3">
                <button
                    id="top"
                    :class="top ? topActive : topInactive"
                    name="top"
                    @click.prevent="toggle"
                >
                    Top Anime
                </button>
            </div>
            <div class="mx-3">
                <button
                    id="upcoming"
                    :class="upcoming ? upcomingActive : upcomingInactive"
                    name="upcoming"
                    @click.prevent="toggle"
                >
                    Upcoming Anime
                </button>
            </div>
            <div class="mx-3">
                <button
                    id="genre"
                    :class="genre ? genreActive : genreInactive"
                    name="genre"
                    @click.prevent="toggle"
                >
                    Genre
                </button>
            </div>
        </div>
        <b-row class="mt-3">
            <div v-if="top" v-bind:style="{ width: '100%' }">
                <div v-bind:style="{ overflowY: 'scroll', height: '85vh' }">
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="anime" v-for="anime in topAnimes" :key="anime.mal_id">
                            <MapCard v-bind:data="anime" />
                        </div>
                    </div>
                    <button
                        class="btn btn-md btn-light my-3 py-3 font-weight-bold"
                        @click="_loadMoreTopAnime"
                        v-bind:style="{ cursor: 'pointer' }"
                    >
                        Load More
                    </button>
                </div>
            </div>
            <div v-if="upcoming" v-bind:style="{ width: '100%' }">
                <div v-bind:style="{ overflowY: 'scroll', height: '85vh' }">
                    <div class="d-flex flex-wrap justify-content-center">
                        <div class="anime" v-for="anime in upcomingAnimes" :key="anime.mal_id">
                            <MapCard v-bind:data="anime" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="genre" v-bind:style="{ width: '100%' }">
                <div class="form-group col-4 sm-12 my-3">
                    <select
                        class="form-control"
                        id="exampleFormControlSelect1"
                        v-on:change="getGenre"
                        :defaultValue="genres[0].id"
                    >
                        <option>Select Genres</option>
                        <option v-for="genre in genres" :key="genre.id" :value="genre.id">{{
                            genre.name
                        }}</option>
                    </select>
                </div>
                <div v-if="genreAnimes">
                    <div v-bind:style="{ overflowY: 'scroll', height: '85vh' }">
                        <div class="d-flex flex-wrap justify-content-center">
                            <div class="anime" v-for="(anime, index) in genreAnimes" :key="index">
                                <MapCard v-bind:data="anime" />
                            </div>
                        </div>
                        <button
                            class="btn btn-md btn-light my-3 py-3 font-weight-bold"
                            @click="_loadMoreGenreAnime"
                            v-bind:style="{ cursor: 'pointer' }"
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </div>
        </b-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import animeGenre from "@/js/animeGenre.js";
import MapCard from "@/components/MapCard.vue";

export default {
    name: "Anime",
    data() {
        return {
            top: false,
            topActive: "btn btn-md btn-danger",
            topInactive: "btn btn-md btn-outline-danger",
            upcoming: false,
            upcomingActive: "btn btn-md btn-danger",
            upcomingInactive: "btn btn-md btn-outline-danger",
            genre: false,
            genreActive: "btn btn-md btn-danger",
            genreInactive: "btn btn-md btn-outline-danger",
            genres: animeGenre,
            genreId: null,
            windowSize: window.innerHeight,
        };
    },
    components: {
        MapCard,
    },

    methods: {
        ...mapActions([
            "fetchTopAnimes",
            "fetchUpcomingAnimes",
            "loadMoreTopAnimes",
            "fetchGenreAnimes",
            "loadMoreGenreAnimes",
        ]),
        async _loadMoreTopAnime() {
            await this.loadMoreTopAnimes();
            this.fetchTopAnimes();
        },
        toggle(e) {
            let { id } = e.target;
            switch (id) {
                case "top":
                    this.top = true;
                    this.upcoming = false;
                    this.genre = false;
                    break;
                case "upcoming":
                    this.top = false;
                    this.upcoming = true;
                    this.genre = false;
                    break;
                case "genre":
                    this.top = false;
                    this.upcoming = false;
                    this.genre = true;
                    break;
                default:
                    return;
            }
        },
        async getGenre(e) {
            this.genreId = e.target.value;
            await this.fetchGenreAnimes(e.target.value);
        },
        async _loadMoreGenreAnime() {
            await this.loadMoreGenreAnimes();
            this.fetchGenreAnimes(this.genreId);
        },
    },
    computed: mapGetters(["topAnimes", "upcomingAnimes", "genreAnimes"]),
    async created() {
        if (!this.topAnimes || this.topAnimes.length === 0) {
            await this.fetchTopAnimes();
        }
        this.fetchUpcomingAnimes();
    },
    mounted() {
        this.top = true;
    },
};
</script>
<style scoped>
.animes {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
}
.anime {
    margin: 10px 20px;
}
</style>
