import Home from "@/views/Home.vue";
import Anime from "@/views/Anime.vue";
import Manga from "@/views/Manga.vue";
import Search from "@/views/Search.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/anime",
        name: "Anime",
        component: Anime,
    },
    {
        path: "/manga",
        name: "Manga",
        component: Manga,
    },
    {
        path: "/search",
        name: "Search",
        component: Search,
    },
];

export default routes;
