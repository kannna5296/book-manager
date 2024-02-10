import Learn from "@/components/Learn.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const unauthRoutes: Array<RouteRecordRaw> = [
  {
    name: "AuthUnRequired",
    path: "/",
    children: [
      {
        name: "",
        path: "/",
        component: Learn,
      },
    ],
  },
];

const routes = createRouter({
  history: createWebHistory(),
  routes: [...unauthRoutes],
});

export default routes;

