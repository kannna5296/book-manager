import Learn from "../components/Learn.vue";
import LearnAdd from "../components/LearnAdd.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "index", path: "/", component: Learn },
    { name: "add", path: "/add", component: LearnAdd },
  ],
});

export default routes;
