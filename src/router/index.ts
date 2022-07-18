import Layout from '@/layout/index.vue';
import Container from '@/container/index.vue';
import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store'
import { Message } from 'element-ui';


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
  {
    path: "/pass",
    redirect: "/pass/register_step1",
    component: Container,
    children: [
      {
        path: "register_step1",
        component: () => import("../views/pass/register_step1.vue"),
      },
      {
        path: "register_step2",
        component: () => import("../views/pass/register_step2.vue"),
      },
      {
        path: "register_step3",
        component: () => import("../views/pass/register_step3.vue"),
      },
      {
        path: "login",
        component: () => import("../views/pass/login.vue"),
      },
    ],
  },
  {
    path: "/buy",
    redirect: "/buy/checkout",
    component: Layout,
    children: [
      {
        path: "checkout",
        component: () => import("../views/buy/checkout.vue"),
      },
      {
        path: "confirm",
        component: () => import("../views/buy/confirm.vue"),
      },
    ],
  },
  {
    path: "/user",
    redirect: "/user/welcome",
    component: Layout,
    children: [
      {
        path: "welcome",
        component: () => import("../views/user/welcome.vue"),
      },
      {
        path: "order",
        component: () => import("../views/user/order.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

const whiteList = ['/pass/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  const hasToken = sessionStorage.getItem('token')
  if (hasToken) {
    if (to.path === '/pass/login') {
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.userinfo
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('getInfo')
          next()
        } catch (error) {
          console.log(error, 'getInfo fail');
          await store.dispatch('resetToken')
          Message.error('Has Error')
          next(`/pass/login?redirect=${to.path}`)
        }
      }
    }
  } else {
      next()
    //   if (whiteList.indexOf(to.path) !== -1) {
    //   next()
    // } else {
    //   next(`/pass/login?redirect=${to.path}`)
    // }
  }
})


export default router;
