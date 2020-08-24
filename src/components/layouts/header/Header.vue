<template>
    <div class="header mt-4">
        <div class="d-flex flex-row">
            <div class="align-self-center">
                <h1
                    class="m-0 h3"
                    @click.prevent="homePageRedirect"
                    style="font-family: 'Alata', sans-serif;"
                    v-bind:style="{ cursor: 'pointer' }"
                >
                    OTAKU-INFO
                </h1>
            </div>
            <div v-for="(route, index) in routes" v-bind:key="index" class="align-self-end">
                <router-link :to="route.path">
                    <div v-if="route.path === pathname" v-on:click="toggle" :name="route.path">
                        <strong :id="route.path" class="h4 mx-3 _nav font-weight-bold text-warning">
                            {{ route.name }}
                        </strong>
                    </div>
                    <div v-else>
                        <span :id="route.path" class="h4 mx-3 _nav" v-on:click="toggle">
                            {{ route.name }}
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import routes from "@/router/headers";

export default {
    name: "Header",
    data() {
        return {
            routes: routes,
            selectField: routes.filter((route) => route.name === "Anime" || route.name === "Manga"),
            pathname: null,
            searchShow: false,
        };
    },
    components: {},
    methods: {
        homePageRedirect() {
            this.$router.push("/");
        },
        toggle(e) {
            this.pathname = e.target.id;
        },
        toggleSearchShow() {
            this.searchShow = !this.searchShow;
        },
        async searchData(data) {
            this.data = data;
            this.$router.push(`/search?type=${data.option}&input=${data.input}`);
        },
    },
    created() {
        this.pathname = window.location.pathname;
    },
    mounted() {
        this.pathname = window.location.pathname;
    },
};
</script>

<style scoped>
a:hover {
    text-decoration: none;
}
._nav {
    text-decoration: none;
    color: white;
}
._nav:hover {
    color: gold;
}
</style>
