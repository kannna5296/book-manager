import Learn from "@/components/Learn.vue";
import LearnAdd from "@/components/LearnAdd.vue";
import Signin from "@/components/Signin.vue";
import NotFound from "@/components/NotFound.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase/firebase";

const authRoutes: Array<RouteRecordRaw> = [
  {
    name: "AuthRequired",
    path: "/",
    component: () => import("@/components/SideBarTemplate.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        name: "index",
        path: "/",
        component: Learn,
      },
      {
        name: "add",
        path: "/add",
        component: LearnAdd,
      },
    ],
  },
];

const unauthRoutes: Array<RouteRecordRaw> = [
  {
    name: "AuthUnRequired",
    path: "/",
    component: () => import("@/components/OneColumnTemplate.vue"),
    children: [
      {
        name: "signin",
        path: "/signin",
        component: Signin,
      },
      { path: "/:catchAll(.*)", component: NotFound },
    ],
  },
];

const routes = createRouter({
  history: createWebHistory(),
  routes: [...authRoutes, ...unauthRoutes],
});

export default routes;

// ログインしていない場合に認証必須画面にアクセスした場合、ログイン画面にリダイレクト
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
