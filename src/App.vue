<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive> 
  </div>
</template>

<script>
import { STORENAME } from "./config";

export default {
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title;
      },
      immediate: true
    }
  },
  async created() {
    let res = await this.$store.dispatch("products/fetchStoreStyles");
    let mergedStyles = { ...this.$store.state.styles, ...res };
    this.$store.commit("updateStoreName", STORENAME);
    this.$store.commit("updateStyles", mergedStyles);
  }
};
</script>
