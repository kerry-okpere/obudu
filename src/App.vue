<template>
  <div id="app">
    <router-view></router-view>
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
    let mergedStyles = { ...this.$store.state.styles, ...res,  };
    const storeName = res.storeName || STORENAME
    this.$store.commit("updateStoreName", storeName);
    this.$store.commit("updateStyles", mergedStyles);
  }
};
</script>
