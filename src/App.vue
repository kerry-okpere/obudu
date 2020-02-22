<template>
  <div id="app">
    <transition name="animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view />
    </transition>
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
    let stylesRes = await this.$store.dispatch("products/fetchStoreStyles");
    let dataRes = await this.$store.dispatch("products/fetchStoreStyles");
    let mergedStyles = { ...this.$store.state.styles, ...stylesRes,  };
    let mergedData = { ...this.$store.state.styles, ...dataRes,  };
    const storeName = stylesRes.storeName || STORENAME
    this.$store.commit("updateStoreName", storeName);
    this.$store.commit("updateStyles", mergedStyles);
    this.$store.commit("updateData", mergedData);
  }
};
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
</style>
