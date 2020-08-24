import fetch from "node-fetch";

const state = {
    searchType: null,
    searchInput: null,
    search: null,
    searchPage: 1,
};

const getters = {
    searched: (state) => {
        return state.search;
    },
};

const actions = {
    async fetchSearch({ commit }, data) {
        let { input, option } = data;
        if (!input) input = "one piece";
        if (!option) option = "anime";
        await commit("setSearchType", data);
        try {
            let resp = await fetch(
                `https://api.jikan.moe/v3/search/${option}?q=${input}&page=${state.searchPage}`
            );
            resp = await resp.json();
            commit("setSearch", resp.results);
        } catch (err) {
            commit("setSearchPage", state.searchPage);
        }
    },
    async loadMoreSearches({ commit }) {
        let page = state.searchPage + 1;
        await commit("setSearchPage", page);
    },
};

const mutations = {
    setSearchType: (state, data) => {
        let { input, option } = data;
        if (!state.searchType || state.searchType !== option) {
            state.searchType = option;
            state.search = null;
            state.searchPage = 1;
        }
        if (!state.searchInput || state.searchInput !== input) {
            state.searchInput = input;
            state.search = null;
            state.searchPage = 1;
        }
    },
    setSearch: (state, search) => {
        state.search = state.search ? [...state.search, ...search] : search;
    },
    setSearchPage: (state, page) => {
        state.searchPage = page;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
