<template>
  <header v-if="navShow === true" :class="[navType]">

    <!-- Layout One -->
    <section class="navbar__one d-none d-lg-block" v-if="navLayout === 1">
      <div class="container">
        <div class="row">
          <div class="col col-lg-2">
            <div class="logo">
              <router-link to="/">
                <img v-if="navLogoImg" :src="navLogo" alt="Store Logo">
                <h1 v-else :style="{color: navLogoTextColor, fontSize: navLogoTextSize + 'px'}">{{storeName}}</h1>
              </router-link>
            </div>
          </div>
          <div class="col col-lg-4">
            <nav class="navbar__one-nav">
              <router-link exact to="/">Shop</router-link>
              <router-link exact to="/">Collection</router-link>
              <router-link exact to="/">Sale</router-link>
            </nav>
          </div>
          <div class="col col-lg-4">
            <div class="navbar__one-search">
              <a-input-search placeholder="Search store..." style="width: 250px" />
            </div>
          </div>
          <div class="col col-lg-2">
            <nav class="navbar__one-nav navbar-cta">
              <div class="navbar__item">
                <a-button type="link" @click="setCartShow">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                  <p>Cart</p>
                </a-button>
              </div>
              <div v-if="userLoggedin" class="navbar__item">
                <a-dropdown>
                  <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"><a-icon type="user" />My Account</a-menu-item>
                    <a-menu-item key="2"><a-icon type="shopping" />My Orders</a-menu-item>
                    <a-menu-item key="3"><a-icon type="lock" />Logout</a-menu-item>
                  </a-menu>
                  <a-button type="link">
                    <img src="@/assets/img/nav/user.svg" width="20" alt="Account">
                    <p>Account</p>
                    <a-icon type="down" style="margin:5px 5px 0;" />
                  </a-button>
                </a-dropdown>
              </div>
              <div v-else class="navbar__item">
                <a-button type="link" @click="setLoginShow">
                  <img src="@/assets/img/nav/user.svg" width="20" alt="Account">
                  <p>Account</p>
                </a-button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <!-- Layout Two -->
    <section class="navbar__two d-none d-lg-block" v-if="navLayout === 2">
      <!-- <a-affix :offsetTop="0"> -->
        <div class="container">
          <div class="row">
            <div class="col col-lg-4">
              <nav class="navbar__two-nav">
                <router-link exact to="/">Shop</router-link>
                <router-link exact to="/">Collection</router-link>
                <router-link exact to="/">Sale</router-link>
              </nav>
            </div>
            <div class="col col-lg-3">
              <router-link>
                <img :src="navLogo" alt="Store Logo">
              </router-link>
            </div>
            <div class="col col-lg-3">
              <div class="navbar__two-search">
                <a-input-search placeholder="Search store..." style="width: 250px" />
              </div>
            </div>
            <div class="col col-lg-2">
              <nav class="navbar__two-nav navbar__two-secnav">
                <router-link exact to="/">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                  <p>Cart</p>
                </router-link>
                <a-dropdown :trigger="['click']">
                  <a class="ant-dropdown-link" href="#"><img src="@/assets/img/nav/user.svg" width="20" alt="Account">
                    <p>Account</p>
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item key="0">
                      <a href="#">Register</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#">Sign in</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </nav>
            </div>
          </div>
        </div>
      <!-- </a-affix> -->
    </section>

    <!-- Layout Three -->
    <section class="navbar__three d-none d-lg-block" v-if="navLayout === 3">
      <!-- <a-affix :offsetTop="0"> -->
        <div class="container">
          <div class="row">
            <div class="col col-lg-3">
              <div class="navbar__three-search">
                <a-input-search placeholder="Search store..." style="width: 250px"/>
              </div>
            </div>
            <div class="col col-lg-4">
              <nav class="navbar__three-nav">
                <router-link exact to="/">Shop</router-link>
                <router-link exact to="/">Collection</router-link>
                <router-link exact to="/">Sale</router-link>
              </nav>
            </div>
            <div class="col col-lg-3">
              <router-link>
                <img :src="navLogo" alt="Store Logo">
              </router-link>
            </div>
            <div class="col col-lg-2">
              <nav class="navbar__three-nav navbar__three-secnav">
                <div>
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                  <p>Cart</p>
                </div>
                <a-dropdown :trigger="['click']">
                  <a class="ant-dropdown-link" href="#"><img src="@/assets/img/nav/user.svg" width="20" alt="Account">
                    <p>Account</p>
                  </a>
                  <a-menu slot="overlay">
                    <a-menu-item key="0">
                      <a href="#">Register</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="#">Sign in</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
              </nav>
            </div>
          </div>
        </div>
      <!-- </a-affix> -->
    </section>

    <!-- Mobile Nav -->
    <section class="navbar__mobile d-block d-lg-none">
      <Slide>
        <a id="home" href="#">
          <span>Home</span>
        </a>
      </Slide>
    </section>

  </header>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import { mapGetters } from 'vuex'

  export default {
    components: {
      Slide
    },
    data: () => ({
      userLoggedin: true
    }),
    methods: {
      setCartShow(e) {
        this.$store.state.styles.cartShow = true;
      },
      setLoginShow(e) {
        this.$store.state.styles.loginShow = true;
      }
    },
    computed: {
      ...mapGetters ([
        'priColor',
        'secColor',
        'priFont',
        'secFont',
        'navShow',
        'navType',
        'navLogo',
        'navLogoImg',
        'navLogoTextColor',
        'navLogoTextSize',
        'navLayout',
        'storeName'
      ]),
    }
  }
</script>

<style lang="scss">
  @import './_index';
</style>