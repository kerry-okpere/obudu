<template>
  <div class="logo">
    <router-link to="/">
      <img v-if="navLogoImg" :src="navLogo" :alt="[storeName + 'Logo']" />
      <h1 v-else :style="{color: navLogoTextColor, fontSize: navLogoTextSize + 'px'}">{{storeName}}</h1>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { STORENAME } from "../../../config";

export default {
  computed: {
    ...mapGetters ([
      'navLogo',
      'navLogoImg',
      'navLogoTextColor',
      'navLogoTextSize',
      'storeName'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '../index';
</style>