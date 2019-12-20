import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

import Home from './views/Home';
import Product from './views/Product';
import Collection from './views/Collection';
import Checkout from './views/Checkout';
import Account from './views/Account';
import About from './views/About';
import Customize from './views/Customize';

import loadEnv from './middleware/loadEnv';


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
      // path: "/product/",
      name: "Product",
      component: Product
    },
    {
      path: "/collection/",
      name: "Collection",
      component: Collection
    },
    {
      path: "/checkout/",
      name: "Checkout",
      component: Checkout,
      meta: {
        middleware: [
          loadEnv
        ]
      }
    },
    {
      path: "/account/",
      name: "Account",
      component: Account
    },
    {
      path: "/about/",
      name: "About",
      component: About
    },
    {
      path: "/customize/",
      name: "Customize",
      component: Customize,
    },
    
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