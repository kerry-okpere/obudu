<template>
  <nav class="navbar__one-nav navbar-cta" style="margin: 6px 0 0;">
    <div class="navbar__item" :style="{color: navColor}">
    <!-- Cart -->
    <a-badge :count="actualCartCount" :numberStyle="cartIconStyle" :showZero="false">
      <a-button type="link" @click="setCartShow">
        <v-icon name="shopping-cart" :style="{color: navColor}" />
        <span :style="{color: navColor}">Cart</span>
      </a-button>
    </a-badge>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data: () => ({
    userLoggedin: false,
    cartItems: 0,
    cartIconStyle: {backgroundColor: "#ff0909", borderColor: "#ff0909", marginTop: "4px"},
    getCartCount: 0,
  }),
  computed: {
    ...mapGetters([
      'navColor',
      'cartShow',
      'loginShow'
      
    ]),
    actualCartCount() {
      return this.$store.getters["getCartQuantity"];
    },
  },
  methods: {
    setCartShow() {
      this.$store.commit('setCartShow', true);
    }
  },
}
</script>

<style>

</style>