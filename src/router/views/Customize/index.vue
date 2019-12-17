<template>
  <section class="customize">
    <a-layout id="fixed-sidebar">
      <a-layout-sider collapsible v-model="collapsed" width="275">
        <!-- <a-menu mode="inline" :defaultSelectedKeys="['1']">
          <a-menu-item key="1">
            <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed"/>
            <span>Hide Panel</span>
          </a-menu-item>
        </a-menu> -->
        <ThemeSettings :class="{ hide: collapsed }" />
      </a-layout-sider>
      <a-layout :style="{ marginLeft: '0px' }">
        <Layout />
      </a-layout>
    </a-layout>
  </section>
</template>

<script>
import Layout from "~/layouts/HomeLayout.vue";
import ThemeSettings from "~/components/ThemeSettings";
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
.hide {
  display: none;
}
.customize {
  &__settings {
    padding-left: 20px;
    padding-right: 5px;
  }

  &__preview {
    padding: 0;
  }

  .ant-layout-sider {
    background: #EEEEEE;
    border-right: 1px solid #ddd;
  }
}

@include media-breakpoint-down(xs) {
  .customize {
    &__preview {
      display: none;
    }
  }
}
</style>