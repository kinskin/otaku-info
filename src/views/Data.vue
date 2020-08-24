<template>
    <div>
        <div v-if="type === 'anime' && data" class="text-left mt-5 mb-4">
            <b-row class="mt-3">
                <b-col sm="12" lg="4">
                    <div class="text-center">
                        <img :src="data.image_url" width="60%" />
                    </div>
                </b-col>
                <b-col sm="12" lg="8">
                    <h1>{{ data.title }} ({{ data.premiered }})</h1>
                    <p class="lead">Current rank: {{ data.rank }}</p>
                    <p class="lead">Rated {{ data.score }} ★ by {{ data.scored_by }} Users</p>
                    <p class="lead">{{ data.background }}</p>
                    <h3 class="text-center">Synopsis</h3>
                    <p class="lead">{{ data.synopsis }}</p>
                    <p class="lead">{{ data.episodes }} episodes - {{ data.duration }}.</p>
                    <p class="lead">Aired from {{ data.aired.string }}</p>
                </b-col>
            </b-row>
            <div v-if="data.trailer_url" class="my-5">
                <div class="embed-container">
                    <iframe
                        :src="data.trailer_url"
                        allow="autoplay"
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <b-row v-if="data.opening_themes.length > 0 || data.ending_themes.length > 0">
                <b-col sm="12" md="6">
                    <h3 class="text-center">Opening Themes</h3>
                    <p class="lead" v-for="title in data.opening_themes" :key="title.mal_id">
                        {{ title }}
                    </p>
                </b-col>
                <b-col sm="12" md="6">
                    <h3 class="text-center">Ending Themes</h3>
                    <p class="lead" v-for="title in data.ending_themes" :key="title.mal_id">
                        {{ title }}
                    </p>
                </b-col>
            </b-row>
        </div>
        <div v-else-if="type === 'manga' && data" class="text-left mt-5 mb-4">
            <b-row class="mt-3">
                <b-col sm="12" lg="4">
                    <div class="text-center">
                        <img :src="data.image_url" width="60%" />
                    </div>
                </b-col>
                <b-col sm="12" lg="8">
                    <h1>{{ data.title }}</h1>
                    <p class="lead">Current rank: {{ data.rank }}</p>
                    <p class="lead">Rated {{ data.score }} ★ by {{ data.scored_by }} Users</p>
                    <p class="lead">{{ data.background }}</p>
                    <h3 class="text-center">Synopsis</h3>
                    <p class="lead">{{ data.synopsis }}</p>
                    <p class="lead" v-if="data.chapter">
                        {{ data.episodes }} episodes - {{ data.duration }}.
                    </p>
                    <p class="lead">Published from {{ data.published.string }}</p>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "AnimeData",
    data() {
        return {
            type: this.$route.params.type,
            id: this.$route.params.id,
            data: null,
        };
    },
    methods: {
        ...mapActions(["fetchAnime", "removeAnime", "fetchManga", "removeManga"]),
    },
    computed: mapGetters(["anime", "manga"]),
    async created() {
        switch (this.type) {
            case "anime":
                await this.fetchAnime(this.id);
                this.data = this.anime;
                break;
            case "manga":
                await this.fetchManga(this.id);
                this.data = this.manga;

                break;
            default:
                return;
        }
    },
    destroyed() {
        switch (this.type) {
            case "anime":
                this.removeAnime();
                this.data = null;
                break;
            case "manga":
                this.removeManga();
                this.data = null;
                break;
            default:
                return;
        }
    },
};
</script>

<style scoped>
* {
    color: white;
}

.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/*
._main-card {
    border: 0;
}
._header,
img {
    text-align: center;
    margin-bottom: 15px;
}
h5 {
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
}
._info-body {
    margin: 10px 0;
}

._info-component-label {
    float: left;
    margin-right: 10px;
    font-weight: bold;
}

._info-component-p {
    margin-left: 20px;
    text-align: left;
} */
</style>
