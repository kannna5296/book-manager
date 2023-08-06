import Learn from "../components/Learn.vue";
import LearnPost from "../components/LearnPost.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "index", path: "/", component: Learn },
    { name: "post", path: "/post", component: LearnPost },
  ],
});

export default routes;
