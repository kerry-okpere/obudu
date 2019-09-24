import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

import Home from "@/components/Home";
import Product from "./views/product";
import Cart from "./views/cart";
import Checkout from "./views/checkout";

import loadEnv from "./middleware/loadEnv";


const router =  new Router({
  mode: 'history',

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path:"/product/:slug",
      name: "Product",
      component: Product
    },
    {
      path:"/cart",
      name: "Cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout,
      meta: {
        middleware: [
          loadEnv
        ]
      }
    }
  ]
});

router.beforeEach( (to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
    store
  };

  return middleware[0]({
    ...context
  });

})


export default router;
