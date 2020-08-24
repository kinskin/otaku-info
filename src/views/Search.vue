<template>
    <div>
        <div class="d-flex flex-row mt-5 mb-4">
            <SelectInput2
                v-bind:optionsData="selectField"
                v-bind:defaultData="data"
                v-on:form-data="searchData"
            />
        </div>
        <b-row class="mt-2">
            <div v-if="searched" v-bind:style="{ width: '100%' }">
                <div class="d-flex flex-wrap justify-content-center">
                    <div v-for="(search, index) in searched" :key="index">
                        <MapCard class="m-3" v-bind:data="search" />
                    </div>
                </div>
                <button
                    class="btn btn-md btn-light my-3 py-3 font-weight-bold"
                    @click="_loadMoreSearches"
                    v-bind:style="{ cursor: 'pointer' }"
                >
                    Load More
                </button>
            </div>
        </b-row>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import routes from "@/router/headers";
import SelectInput2 from "@/components/layouts/input/SelectInput2";
import MapCard from "@/components/MapCard.vue";

export default {
    name: "Search",
    components: {
        SelectInput2,
        MapCard,
    },
    data() {
        return {
            type: this.$route.params.type,
            input: this.$route.params.input,
            data: null,
            selectField: routes.filter((route) => route.name === "Anime" || route.name === "Manga"),
        };
    },
    methods: {
        ...mapActions(["fetchSearch", "loadMoreSearches"]),
        async searchData(data) {
            this.data = data;
            await this.fetchSearch(data);
        },
        async _loadMoreSearches() {
            await this.loadMoreSearches();
            this.fetchSearch(this.data);
        },
    },
    computed: mapGetters(["searched"]),
};
</script>

<style scoped></style>
