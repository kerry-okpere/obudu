<template>
  <section class="customize">
    <a-layout id="fixed-sidebar" class="hidden">
      <!-- <a-layout-sider collapsible v-model="collapsed" width="275"> -->
      <a-layout-sider width="275" :style="{ overflow: 'auto', height: '100vh',  zIndex: 1000, position: 'fixed', left: 0 }">
        <ThemeSettings :class="{ hide: collapsed }" />
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '230px' }">
        <Layout />
      </a-layout>
    </a-layout>
    <div class="d-md-none">
      <div class="row">
        <div class="col-12">
          <ThemeSettings />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { STORE_ID } from "./../../../config";
import Layout from "@/router/layouts/Preview.vue";
import ThemeSettings from "@/components/ThemeSettings";
import Cookies from 'js-cookie'


export default {
  components: {
    Layout,
    ThemeSettings
  },
  data: () => ({
    collapsed: false
  }),
  created() {
    if (window.location.hostname != "localhost") {
      const store = Cookies.get('storez')
      if (store != STORE_ID) {
        window.location.href = `https://${window.location.host}/dashboard`;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
