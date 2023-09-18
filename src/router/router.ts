import Learn from "../components/Learn.vue";
import LearnAdd from "../components/LearnAdd.vue";
import Signin from "../components/Signin.vue";
import Signup from "../components/Signup.vue";
import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firebase/firebase";

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
    {
      name: "signup",
      path: "/signup",
      component: Signup,
    },
  ],
});

export default routes;

routes.beforeEach((to, _from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth) {
    auth.onAuthStateChanged((user) => {
      //onAuthStateChangedじゃないとuserがnullになる
      if (!user) {
        next({
          path: "/signin",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    });
  } else {
    next();
  }
});
