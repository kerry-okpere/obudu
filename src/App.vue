<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { STORENAME } from "./config";

export default {
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
  async created() {
    let res = await this.$store.dispatch("products/fetchStoreStyles");
    let savedStyles = { ...res, storeName: this.capitalizeFirstLetter(STORENAME) };
    let mergedStyles = { ...this.$store.state.styles, ...savedStyles };
    this.$store.commit("updateStyles", mergedStyles);
  }
};
</script>
