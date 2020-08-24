<template>
    <div>
        <div class="d-flex flex-row mb-4">
            <div class="align-self-center">
                <h1
                    class="m-0 h3"
                    style="font-family: 'Alata', sans-serif;"
                    v-bind:style="{ cursor: 'pointer' }"
                >
                    Top Anime
                </h1>
            </div>
        </div>
        <div class="mb-4" v-bind:style="{ overflowX: 'scroll' }">
            <div class="d-flex flex-row">
                <div class="my-2 mx-3" v-for="anime in animes" :key="anime.mal_id">
                    <MapCard v-bind:data="anime" />
                </div>
            </div>
        </div>
        <div class="d-flex flex-row mb-4">
            <div class="align-self-center">
                <h1
                    class="m-0 h3"
                    style="font-family: 'Alata', sans-serif;"
                    v-bind:style="{ cursor: 'pointer' }"
                >
                    Top Manga
                </h1>
            </div>
        </div>
        <div class="mb-4" v-bind:style="{ overflowX: 'scroll' }">
            <div class="d-flex flex-row">
                <div class="my-2 mx-3" v-for="manga in mangas" :key="manga.mal_id">
                    <MapCard v-bind:data="manga" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MapCard from "@/components/MapCard.vue";

export default {
    name: "Home",
    computed: mapGetters(["topAnimes", "topMangas"]),
    components: {
        MapCard,
    },
    data() {
        return {
            animes: this.topAnimes,
            mangas: null,
        };
    },
    methods: {
        ...mapActions(["fetchTopAnimes", "fetchTopMangas"]),
    },
    async created() {
        if (!this.topAnimes || this.topAnimes.length === 0) {
            await this.fetchTopAnimes();
            this.animes = this.topAnimes
                ? this.topAnimes.length > 20
                    ? this.topAnimes.slice(0, 20)
                    : this.topAnimes
                : null;
        }
        if (!this.topMangas || this.topMangas.length === 0) {
            await this.fetchTopMangas();
            this.mangas = this.topMangas
                ? this.topMangas.length > 20
                    ? this.topMangas.slice(0, 20)
                    : this.topMangas
                : null;
        }
    },
    mounted() {
        this.animes = this.topAnimes
            ? this.topAnimes.length > 20
                ? this.topAnimes.slice(0, 20)
                : this.topAnimes
            : null;
        this.mangas = this.topMangas
            ? this.topMangas.length > 20
                ? this.topMangas.slice(0, 20)
                : this.topMangas
            : null;
    },
};
</script>

<style scoped></style>
