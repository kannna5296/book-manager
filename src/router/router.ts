import Learn from "../components/Learn.vue";
import LearnAdd from "../components/LearnAdd.vue";
import Signin from "../components/Signin.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "index",
      path: "/",
      component: Learn,
      meta: { requiresAuth: true },
    },
    {
      name: "add",
      path: "/add",
      component: LearnAdd,
      meta: { requiresAuth: true },
    },
    {
      name: "signin",
      path: "/signin",
      component: Signin,
    },
  ],
});

export default routes;

routes.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    // TODO セッション管理方法
    const user = sessionStorage.getItem("user");
    if (!user) {
      next({
        path: "/signin",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
