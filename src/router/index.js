import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import Collection from './views/Collection';
import Checkout from './views/Checkout';
import Dashboard from './views/Dashboard';
import About from './views/About';
import Design from './views/Design';
import Error from './views/Error';
import OrderSuccess from './views/OrderSuccess';
import OrderFailure from './views/OrderFailure';

import loadEnv from './middleware/loadEnv';

import { STORENAME } from './../config'

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        title: `${STORENAME} Storefront`,
      }
    },
    {
      path:"/product/:slug",
      // path: "/product/",
      component: Product,
      meta: {
        title: `${STORENAME} Product`,
      }
    },
    {
      path: "/collection",
      component: Collection
    },
    {
      path: "/checkout",
      component: Checkout,
      meta: {
        title: `Checkout - ${STORENAME}`,
      }
    },
    {
      path: "/cart/",
      component: Cart,
      meta: {
        title: `Cart - ${STORENAME}`
      }
    },
    {
      path: "/dashboard/",
      component: Dashboard,
      meta: {
        title: `Manage Account - ${STORENAME}`
      }
    },
    {
      path: "/about",
      component: About,
      meta: {
        title: `About - ${STORENAME}`
      }
    },
    {
      path: "/design",
      component: Design,
      meta: {
        title: `Design - ${STORENAME}`,
      }
    },
    {
      path: "*",
      component: Error,
      meta: {
        title: `Page Not Found - ${STORENAME}`,
      }
    },
    {
      path: "/order/success",
      component: OrderSuccess,
      meta: {
        title: `Order Successful - ${STORENAME}`,
      }
    },
    {
      path: "/order/failed",
      component: OrderFailure,
      meta: {
        title: `Order Failed - ${STORENAME}`,
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
