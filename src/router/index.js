import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "@/components/Home";
import product from "./views/product";

export default new Router({  
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/product/:slug",
      name: "product",
      component: product
    }
  ]
})
