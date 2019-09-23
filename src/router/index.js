import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/components/Home";
import Product from "./views/product";
import Cart from "./views/cart";
import Checkout from "./views/checkout";

export default new Router({  
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
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
      component: Checkout
    }
  ]
})
