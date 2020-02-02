<template>
  <header v-if="navShow" :class="[navType, navFont]" >

    <!-- Layout One -->
    <section class="navbar__one d-none d-lg-block" v-if="navLayout === 1">
      <div class="container">
        <div class="row">
          <div class="col col-xl-2">
            <div class="logo">
              <router-link to="/">
                <img v-if="navLogoImg" :src="navLogo" alt="Store Logo" />
                <h1
                  v-else
                  :style="{color: navLogoTextColor, fontSize: navLogoTextSize + 'px'}"
                >{{storeName}}</h1>
              </router-link>
            </div>
          </div>
          <div class="col col-xl-4">
            <nav class="navbar__one-nav">
              <router-link exact to="/" :style="{color: navColor}">Shop</router-link>
              <router-link exact to="/" :style="{color: navColor}">Collections</router-link>
            </nav>
          </div>
          <div class="col col-xl-5">
            <div class="navbar__one-search search" :style="{color: navColor}">
              <a-input-search placeholder="Search store..." style="width: 270px;float: right;" />
            </div>
          </div>
          <div class="col col-xl-1">
            <nav class="navbar__one-nav navbar-cta" style="margin: 6px 0 0;">
              <div class="navbar__item" :style="{color: navColor}">
                <a-badge :count="getCartCount" :numberStyle="cartIconStyle" :showZero=true>
                  <a-button type="link" @click="setCartShow">
                    <!-- <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart"> -->
                    <v-icon name="shopping-cart" :style="{color: navColor}" />
                    <span :style="{color: navColor}">Cart</span>
                  </a-button>
                </a-badge>
              </div>
              <!-- <div v-if="userLoggedin" class="navbar__item">
                <a-dropdown>
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1">
                      <a-icon type="user" />My Account
                    </a-menu-item>
                    <a-menu-item key="2">
                      <a-icon type="shopping" />My Orders
                    </a-menu-item>
                    <a-menu-item key="3">
                      <a-icon type="lock" />Logout
                    </a-menu-item>
                  </a-menu>
                  <a-button type="link">
                    <img src="@/assets/img/nav/user.svg" width="20" alt="Account">
                    <span>Account</span>
                    <a-icon type="down" style="margin:5px 5px 0;" />
                  </a-button>
                </a-dropdown>
              </div> -->
              <!-- <div v-else class="navbar__item">
                <a-button type="link" @click="loginShow">
                  <img src="@/assets/img/nav/user.svg" width="20" alt="Account">
                  <span>Account</span>
                </a-button>
              </div> -->
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Layout Two -->
    <section class="navbar__two d-none d-lg-block" v-if="navLayout === 2">
        <div class="container">
          <div class="row">
            <div class="col col-xl-4">
              <nav class="navbar__two-nav">
                <router-link exact to="/" :style="{color: navColor}">Shop</router-link>
                <router-link exact to="/" :style="{color: navColor}">Collection</router-link>
                <router-link exact to="/" :style="{color: navColor}">Sale</router-link>
              </nav>
            </div>
            <div class="col col-xl-3">
              <router-link to="/">
                <img :src="navLogo" alt="Store Logo">
              </router-link>
            </div>
            <div class="col col-xl-3">
              <div class="navbar__two-search">
                <a-input-search placeholder="Search store..." style="width: 250px" />
              </div>
            </div>
            <div class="col col-xl-2">
              <nav class="navbar__two-nav navbar__two-secnav">
                <a-badge :count="cartItems" :numberStyle="cartIconStyle">
                  <a-button type="link" @click="setCartShow($event.target.value)">
                    <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                    <h4 :style="{color: navColor}">Cart</h4>
                  </a-button>
                </a-badge>
              </nav>
            </div>
          </div>
          <div class="col col-xl-2">
            <nav class="navbar__two-nav navbar__two-secnav">
              <a-badge :count="getCartCount" :numberStyle="{cartIconStyle}" :showZero=true>
                <a-button type="link" @click="cartShow">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart" />
                  <h4>Cart</h4>
                </a-button>
              </a-badge>
            </nav>
          </div>
        </div>
    </section>

    <!-- Layout Three -->
    <section class="navbar__three d-none d-lg-block" v-if="navLayout === 3">
      <div class="container">
        <div class="row">
          <div class="col col-xl-3">
            <div class="navbar__three-search">
              <a-input-search placeholder="Search store..." style="width: 250px" />
            </div>
          </div>
          <div class="col col-xl-4">
            <nav class="navbar__three-nav">
              <router-link exact to="/" :style="{color: navColor}">Shop</router-link>
              <router-link exact to="/" :style="{color: navColor}">Collection</router-link>
              <router-link exact to="/" :style="{color: navColor}">Sale</router-link>
            </nav>
          </div>
          <div class="col col-xl-3">
            <router-link>
              <img :src="navLogo" alt="Store Logo" />
            </router-link>
          </div>
          <div class="col col-xl-2">
            <nav class="navbar__three-nav navbar__three-secnav">
              <a-badge :count="getCartCount" :numberStyle="{cartIconStyle}" :showZero=true>
                <a-button type="link" @click="setCartShow($event.target.value)">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart" />
                  <h4 :style="{color: navColor}">Cart</h4>
                </a-button>
              </a-badge>
            </nav>
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
                <a-badge :count="getCartCount" :numberStyle="{cartIconStyleMobile}" :showZero=true>
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
import { STORENAME } from "./../../config";

export default {
  components: {
    Slide
  },

  data: () => ({
    userLoggedin: false,
    cartItems: 0,
    cartIconStyle: "backgroundColor: #ff5252;borderColor: #ff5252;marginTop: 4px",
    cartIconStyleMobile: "backgroundColor: #3C87D1;marginTop: 10px",
    getCartCount: 0
  }),

  computed: {
    actualCartCount() {
      return this.$store.getters["products/getCartQuantity"];
    },
    ...mapGetters([
      'priColor',
      'secColor',
      'priFont',
      'secFont',
      'navFont',
      'navShow',
      'navType',
      'navColor',
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
  methods: {
    setCartShow() {
      this.$store.commit('setCartShow', true);
    }
  },
  watch: {
    actualCartCount(val){
      this.getCartCount = val
    }
  }
};
</script>

<style lang="scss">
@import "./_index";
</style>