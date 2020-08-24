import Vue from "vue";
import Vuex from "vuex";
import anime from "./modules/anime";
import manga from "./modules/manga";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        anime,
        manga,
        search,
    },
});
