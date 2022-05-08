// import { getChildDirname } from "@/utils/path";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/svg",
        name: "Svg",
        component: () => import("../views/svg/index.vue"),
      },
      {
        path: "/resources",
        name: "Resources",
        component: () => import("../views/resources/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
