import Layout from '@/layout/index.vue';
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("../views/index/index.vue"),
      },
    ],
  },
  {
    path: "/category",
    redirect: "/category/:id",
    component: Layout,
    children: [
      {
        path: ":id",
        component: () => import("../views/category/list.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
