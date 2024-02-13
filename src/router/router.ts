import BookSearch from "@/components/BookSearch.vue";
import BookDetail from "@/components/BookDetail.vue";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const unauthRoutes: Array<RouteRecordRaw> = [
  {
    name: "AuthUnRequired",
    path: "/",
    children: [
      {
        name: "",
        path: "/book",
        component: BookSearch,
      },
      {
        name: "",
        path: "/book/:id",
        component: BookDetail,
      },
    ],
  },
];

const routes = createRouter({
  history: createWebHistory(),
  routes: [...unauthRoutes],
});

export default routes;

