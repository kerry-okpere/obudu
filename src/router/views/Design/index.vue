<template>
  <section class="customize">
    <a-layout id="fixed-sidebar" class="hidden">
      <a-layout-sider collapsible v-model="collapsed" width="275">
        <ThemeSettings :class="{hide: collapsed}" />
      </a-layout-sider>
      <a-layout :style="{marginLeft: '0px'}">
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
import Layout from "@/router/layouts/Home.vue";
import ThemeSettings from "@/components/ThemeSettings";
// import db from "~/firebase/db";

export default {
  components: {
    Layout,
    ThemeSettings
  },
  data: () => ({
    collapsed: false
  }),
};
</script>

<style lang="scss" scoped>
@import './index';
</style>