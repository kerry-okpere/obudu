<template>
  <section class="dashboard">
    <div class="container">
      <DashboardLayout />
    </div>
  </section>
</template>

<script>
  import VueRouter from 'vue-router';
  import DashboardLayout from './layout/DashboardLayout';
  import Account from './pages/Account';
  import Orders from './pages/Orders';
  import Saved from './pages/Saved';
  import Address from './pages/Address';
  import Payments from './pages/Payments';

  export default {
    components: {
      DashboardLayout
    },
    router: new VueRouter({
      mode: 'history',
      routes: [
        {
          path: '/dashboard/account',
          component: Account
        },
        {
          path: '/dashboard/orders',
          component: Orders
        },
        {
          path: '/dashboard/saved',
          component: Saved
        },
        {
          path: '/dashboard/address',
          component: Address
        },
        {
          path: '/dashboard/payments',
          component: Payments
        }
      ]
    })
  }
</script>

<style lang="scss" scoped>
  @import './index';
</style>