<template>
    <div>
        <div class="d-flex flex-row justify-content-center mt-5 mb-4">
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
                <div
                    class="my-3 py-3 offset-5 col-2 offset-5 font-weight-bold"
                    @click="_loadMoreSearches"
                    v-bind:style="{ cursor: 'pointer' }"
                >
                    Load More
                </div>
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
            this.$router.push(`/search?type=${data.option}&input=${data.input}`);

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
