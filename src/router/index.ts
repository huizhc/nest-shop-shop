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
  {
    path: "/product",
    redirect: "/product/:id",
    component: Layout,
    children: [
      {
        path: ":id",
        component: () => import("../views/product/index.vue"),
      },
    ],
  },
  {
    path: "/cart",
    redirect: "/cart/cart",
    component: Layout,
    children: [
      {
        path: "cart",
        component: () => import("../views/cart/cart.vue"),
      },
      {
        path: "success",
        name: "cart-success",
        component: () => import("../views/cart/success.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
