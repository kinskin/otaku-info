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
                    Top Manga
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
                        <div class="anime" v-for="manga in topMangas" :key="manga.mal_id">
                            <MapCard v-bind:data="manga" />
                        </div>
                    </div>
                    <div
                        class="my-3 py-3 offset-5 col-2 offset-5 font-weight-bold"
                        @click="_loadMoreTopManga"
                        v-bind:style="{ cursor: 'pointer' }"
                    >
                        Load More
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
                <div v-if="genreMangas">
                    <div v-bind:style="{ overflowY: 'scroll', height: '85vh' }">
                        <div class="d-flex flex-wrap justify-content-center">
                            <div class="anime" v-for="(manga, index) in genreMangas" :key="index">
                                <MapCard v-bind:data="manga" />
                            </div>
                        </div>
                        <button
                            class="btn btn-md btn-light my-3 py-3 font-weight-bold"
                            @click="_loadMoreGenreManga"
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
import MapCard from "@/components/MapCard.vue";
import mangaGenre from "@/js/mangaGenre.js";
export default {
    name: "Manga",
    components: {
        MapCard,
    },
    data() {
        return {
            top: false,
            topActive: "btn btn-md btn-danger",
            topInactive: "btn btn-md btn-outline-danger",
            genre: false,
            genreActive: "btn btn-md btn-danger",
            genreInactive: "btn btn-md btn-outline-danger",
            genres: mangaGenre,
            genreId: null,
            windowSize: window.innerHeight,
        };
    },
    methods: {
        toggle(e) {
            let { id } = e.target;
            switch (id) {
                case "top":
                    this.top = true;
                    this.genre = false;
                    break;
                case "genre":
                    this.top = false;
                    this.genre = true;
                    break;
                default:
                    return;
            }
        },
        ...mapActions([
            "fetchTopMangas",
            "loadMoreTopMangas",
            "fetchGenreMangas",
            "loadMoreGenreMangas",
        ]),
        async _loadMoreTopManga() {
            await this.loadMoreTopMangas();
            this.fetchTopMangas();
        },
        async getGenre(e) {
            this.genreId = e.target.value;
            await this.fetchGenreMangas(e.target.value);
        },
        async _loadMoreGenreManga() {
            await this.loadMoreGenreMangas();
            this.fetchGenreMangas(this.genreId);
        },
    },
    computed: mapGetters(["topMangas", "upcomingMangas", "genreMangas"]),
    async created() {
        if (!this.topMangas || this.topMangas.length === 0) {
            await this.fetchTopMangas();
        }
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
