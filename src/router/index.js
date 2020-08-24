import Vue from "vue";
import VueRouter from "vue-router";
import HeaderRoutes from "./headers";
import AnimeSubRoutes from "./anime";

Vue.use(VueRouter);

const routes = [...HeaderRoutes, ...AnimeSubRoutes];

const router = new VueRouter({ mode: "history", routes });

export default router;
