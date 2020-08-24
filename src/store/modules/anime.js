import fetch from "node-fetch";

const state = {
    topAnimes: null,
    topAnimePage: 1,
    upcomingAnimes: null,
    anime: null,
    genreAnimes: null,
    genreAnimePage: 1,
    genreId: null,
};

const getters = {
    topThreeAnimes: (state) => {
        return state.topThreeAnimes;
    },
    topAnimes: (state) => {
        return state.topAnimes;
    },
    upcomingAnimes: (state) => {
        return state.upComingAnimes;
    },
    anime: (state) => {
        return state.anime;
    },
    genreAnimes: (state) => {
        return state.genreAnimes;
    },
};

const actions = {
    async fetchTopAnimes({ commit }) {
        let resp = await fetch(`https://api.jikan.moe/v3/top/anime/${state.topAnimePage}/tv`, {
            method: "get",
        });
        resp = await resp.json();
        commit("setTopAnimes", resp.top);
    },
    async fetchUpcomingAnimes({ commit }) {
        let resp = await fetch("https://api.jikan.moe/v3/season/later", { method: "get" });
        resp = await resp.json();
        commit("setUpcomingAnimes", resp.anime);
    },
    async fetchAnime({ commit }, id) {
        let resp = await fetch(`https://api.jikan.moe/v3/anime/${id}`, { method: "get" });
        resp = await resp.json();
        commit("setAnime", resp);
    },
    async loadMoreTopAnimes({ commit }) {
        return await commit("setTopAnimePage", 1);
    },
    async fetchGenreAnimes({ commit }, id) {
        await commit("setGenreId", id);
        let resp = await fetch(
            `https://api.jikan.moe/v3/genre/anime/${id}/${state.genreAnimePage}`,
            { method: "get" }
        );
        resp = await resp.json();
        await commit("setGenreAnimes", resp);
    },
    async loadMoreGenreAnimes({ commit }) {
        return await commit("setGenreAnimePage", 1);
    },
    removeAnime({ commit }) {
        commit("setAnime");
    },
};

const mutations = {
    setTopAnimes: (state, topAnimes) => {
        state.topAnimes = state.topAnimes ? [...state.topAnimes, ...topAnimes] : topAnimes;
    },
    setUpcomingAnimes: (state, upcomingAnimes) => {
        state.upComingAnimes = upcomingAnimes;
    },
    setTopAnimePage: (state, page) => {
        state.topAnimePage = state.topAnimePage + page;
    },
    setAnime: (state, anime = null) => {
        state.anime = anime;
    },
    setGenreId: (state, id) => {
        if (!state.genreId || state.genreId !== id) {
            state.genreId = id;
            state.genreAnimes = null;
        }
    },
    setGenreAnimes: (state, genre) => {
        let { anime } = genre;
        state.genreAnimes = state.genreAnimes ? [...state.genreAnimes, ...anime] : anime;
    },
    setGenreAnimePage: (state, page) => {
        state.topAnimePage = state.topAnimePage + page;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
