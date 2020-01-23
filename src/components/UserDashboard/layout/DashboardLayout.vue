<template>
  <a-layout class="dashboard__wrap">
    <a-layout-content>
      <!-- TODO: Breadcrumb component -->
      <a-breadcrumb style="margin: 40px 0 30px">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Account</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff; margin: 0 0 40px;">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu mode="inline" :defaultSelectedKeys="['1']" style="height: 100%">
            <a-menu-item key="1">
              <router-link to="/dashboard/account">
                <a-icon type="user" />
                <span>Account</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/dashboard/orders">
                <a-icon type="shopping" />
                <span>Orders</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/dashboard/saved">
                <a-icon type="heart" />
                <span>Saved Items</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/dashboard/address">
                <a-icon type="book" />
                <span>Address Book</span>
              </router-link>
            </a-menu-item>
            <a-menu-item key="5">
              <router-link to="/dashboard/payments">
                <a-icon type="credit-card" />
                <span>Payments</span>
              </router-link>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <div class="content">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
a {
  color: $black!important;
  text-decoration: none!important;
  &:hover {
    color: $primary!important;
    font-weight: 500!important;
  }
}
</style>