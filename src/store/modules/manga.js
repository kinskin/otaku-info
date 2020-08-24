import fetch from "node-fetch";

const state = {
    topMangas: null,
    topMangaPage: 1,
    upcomingMangas: null,
    manga: null,
    genreMangas: null,
    genreMangaPage: 1,
    genreId: null,
};

const getters = {
    topThreeMangas: (state) => {
        return state.topThreeMangas;
    },
    topMangas: (state) => {
        return state.topMangas;
    },
    upcomingMangas: (state) => {
        return state.upComingMangas;
    },
    manga: (state) => {
        return state.manga;
    },
    genreMangas: (state) => {
        return state.genreMangas;
    },
};

const actions = {
    async fetchTopMangas({ commit }) {
        let resp = await fetch(`https://api.jikan.moe/v3/top/manga/${state.topMangaPage}`, {
            method: "get",
        });
        resp = await resp.json();
        commit("setTopMangas", resp.top);
    },
    async fetchUpcomingMangas({ commit }) {
        let resp = await fetch("https://api.jikan.moe/v3/season/later", { method: "get" });
        resp = await resp.json();
        commit("setUpcomingMangas", resp.Manga);
    },
    async fetchManga({ commit }, id) {
        let resp = await fetch(`https://api.jikan.moe/v3/manga/${id}`, { method: "get" });
        resp = await resp.json();
        commit("setManga", resp);
    },
    async loadMoreTopMangas({ commit }) {
        return await commit("setTopMangaPage", 1);
    },
    async fetchGenreMangas({ commit }, id) {
        await commit("setGenreId", id);
        let resp = await fetch(
            `https://api.jikan.moe/v3/genre/manga/${id}/${state.genreMangaPage}`,
            { method: "get" }
        );
        resp = await resp.json();
        await commit("setGenreMangas", resp);
    },
    async loadMoreGenreMangas({ commit }) {
        return await commit("setGenreMangaPage", 1);
    },
    removeManga({ commit }) {
        commit("setManga");
    },
};

const mutations = {
    setTopMangas: (state, topMangas) => {
        state.topMangas = state.topMangas ? [...state.topMangas, ...topMangas] : topMangas;
    },
    setUpcomingMangas: (state, upcomingMangas) => {
        state.upComingMangas = upcomingMangas;
    },
    setTopMangaPage: (state, page) => {
        state.topMangaPage = state.topMangaPage + page;
    },
    setManga: (state, manga = null) => {
        state.manga = manga;
    },
    setGenreId: (state, id) => {
        if (!state.genreId || state.genreId !== id) {
            state.genreId = id;
            state.genreMangas = null;
        }
    },
    setGenreMangas: (state, genre) => {
        let { manga } = genre;
        state.genreMangas = state.genreMangas ? [...state.genreMangas, ...manga] : manga;
    },
    setGenreMangaPage: (state, page) => {
        state.topMangaPage = state.topMangaPage + page;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
