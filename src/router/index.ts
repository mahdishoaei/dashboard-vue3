import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    redirect: "/dashboard",
    component: () => import("@/layout/app/index.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/pages/dashboard/index.vue"),
      },
      {
        path: "/payment",
        name: "payment",
        component: () => import("@/pages/payment/index.vue"),
      },
      {
        path: "/employes",
        name: "employes",
        component: () => import("@/pages/employes/index.vue"),
      },
      {
        path: "/permissions",
        name: "permissions",
        component: () => import("@/pages/permissions/index.vue"),
      },
      {
        path: "/products",
        name: "products",
        component: () => import("@/pages/products/index.vue"),
      },
      {
        path: "/tasks",
        name: "tasks",
        component: () => import("@/pages/tasks/index.vue"),
      },
      {
        path: "/Warehouse",
        name: "Warehouse",
        component: () => import("@/pages/wareHouse/index.vue"),
      },
      {
        path: "/setting",
        name: "setting",
        component: () => import("@/pages/setting/index.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    redirect: "/auth/login",
    component: () => import("@/layout/auth/index.vue"),
    children: [
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/pages/auth/login/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
