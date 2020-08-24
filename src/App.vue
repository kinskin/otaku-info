<template>
    <div id="app">
        <div class="container-fluid">
            <Header />
            <!-- <router-link to="/">Home</router-link> -->
            <router-view />
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import Header from "@/components/layouts/header/Header.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
    name: "App",
    components: { Header },
};
</script>

<style>
body {
    background-color: black;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    width: 100%;
    height: 100vh;
}
</style>
