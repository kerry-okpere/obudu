<template>
  <section class="customize">
    <a-layout id="fixed-sidebar" class="hidden">
      <a-layout-sider collapsible v-model="collapsed" width="275">
        <ThemeSettings :class="{ hide: collapsed }" />
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '0px' }">
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
import Layout from "@/router/layouts/Home.vue";
import ThemeSettings from "@/components/ThemeSettings";

export default {
  components: {
    Layout,
    ThemeSettings
  },
  data: () => ({
    collapsed: false
  }),
  methods: {
    getStoreCookie() {
      // Get store value from Cookie
      let cookie = {};
      document.cookie.split(";").forEach(el => {
        let [k, v] = el.split("=");
        cookie[k.trim()] = v;
      });
      return cookie.store;
    }
  },
  created() {
    if (window.location.hostname != "localhost") {
      const store = this.getStoreCookie();
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
