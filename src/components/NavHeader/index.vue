<template>
  <header v-if="navShow" :class="[navType, navFont]" :style="navTypeFixed ? {backgroundColor: navBgColor} : {backgroundColor: 'transparent'}">

    <!-- Layout One -->
    <section class="navbar__one d-none d-xl-block" v-if="navLayout === 1">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <NavLogo />
          </div>
          <div class="col-4">
            <NavMenu />
          </div>
          <div class="col-5">
            <NavSearch />
          </div>
          <div class="col-1">
            <NavAction />
          </div>
        </div>
      </div>
    </section>

    <!-- Layout Two -->
    <section class="navbar__two d-none d-xl-block" v-if="navLayout === 2">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <NavMenu />
          </div>
          <div class="col-3">
            <NavLogo />
          </div>
          <div class="col-3">
            <NavSearch />
          </div>
          <div class="col-2">
            <NavAction />
          </div>
        </div>
      </div>
    </section>

    <!-- Layout Three -->
    <section class="navbar__three d-none d-xl-block" v-if="navLayout === 3">
      <div class="container">
        <div class="row">
          <div class="col-3">
            <NavSearch />
          </div>
          <div class="col-4">
            <NavMenu />
          </div>
          <div class="col-3">
            <NavLogo />
          </div>
          <div class="col-2">
            <NavAction />
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Nav -->
    <section class="navbar__mobile d-block d-lg-none">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <div class="navbar__mobile-logo">
              <router-link to="/">
                <img v-if="navLogoImg" :src="navLogo" alt="Store Logo" />
                <h1
                  v-else
                  :style="{color: navLogoTextColor, fontSize: navLogoTextSize + 'px'}"
                >{{storeName}}</h1>
              </router-link>
            </div>
          </div>
          <div class="col-8">
            <nav class="navbar__mobile-nav navbar-cta" style="margin: 0px 0 0;">
              <div class="navbar__item">
                <a-button type="link">
                  <!-- <img src="@/assets/img/nav/search.svg" width="20" alt="Search"> -->
                </a-button>
              </div>
              <div class="navbar__item">
                <a-badge :count="actualCartCount" :numberStyle="{cartIconStyleMobile}" :showZero="false">
                  <a-button type="link" @click="cartShow">
                    <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart" />
                  </a-button>
                </a-badge>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<script>
import { Slide } from "vue-burger-menu";
import { mapGetters, mapMutations } from "vuex";
import NavLogo from './components/NavLogo';
import NavMenu from './components/NavMenu';
import NavSearch from './components/NavSearch';
import NavAction from './components/NavAction';

export default {
  components: {
    Slide,
    NavLogo,
    NavMenu,
    NavSearch,
    NavAction
  },

  data: () => ({
    userLoggedin: false,
    cartItems: 0,
    cartIconStyle: {backgroundColor: "#ff0909", borderColor: "#ff0909", marginTop: "4px"},
    cartIconStyleMobile: {backgroundColor: "#ff0909", borderColor: "#ff0909", marginTop: "10px"},
    getCartCount: 0,
  }),

  computed: {
    navTypeFixed() {
      if (this.$store.state.styles.navType === 'navFixed') {
        return true
      } else {
        return false
      };
    },
    actualCartCount() {
      return this.$store.getters["getCartQuantity"];
    },
    ...mapGetters([
      'priColor',
      'secColor',
      'priFont',
      'secFont',
      'navFont',
      'navMenu',
      'navShow',
      'navType',
      'navColor',
      'navBgColor',
      'navLogo',
      'navLogoImg',
      'navLogoTextColor',
      'navLogoTextSize',
      'navLayout',
      'storeName',
      'cartShow',
      'loginShow'
    ])
  },
  // watch: {
  //   actualCartCount(val){
  //     this.getCartCount = val
  //   }
  // }
};
</script>

<style lang="scss">
@import "./_index";
</style>