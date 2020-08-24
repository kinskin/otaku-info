import Data from "@/views/Data.vue";

const animeSubRoutes = [
    {
        path: "/data/:type/:id",
        name: "Data",
        component: Data,
    },
];

export default animeSubRoutes;
