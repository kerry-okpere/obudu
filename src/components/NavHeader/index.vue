<template>
  <header v-if="navShow === true" :class="[navType]">
    <!-- Layout One -->
    <section class="navbar__one d-none d-lg-block" v-if="navLayout === 1">
      <!-- <a-affix :offsetTop="0"> -->
        <div class="container">
          <div class="row">
            <div class="col col-lg-2">
              <div class="logo">
                <g-link to="/">
                  <img v-if="navLogoImg" :src="navLogo" alt="Store Logo">
                  <h1 v-else :style="{color: navLogoTextColor, fontSize: navLogoTextSize + 'px'}">{{storeName}}</h1>
                </g-link>
              </div>
            </div>
            <div class="col col-lg-5">
              <nav class="navbar__one-nav">
                <g-link exact to="/">Shop</g-link>
                <g-link exact to="/">Collection</g-link>
                <g-link exact to="/">Sale</g-link>
              </nav>
            </div>
            <div class="col col-lg-3">
              <div class="navbar__one-search">
                <a-input-search placeholder="Search store..." style="width: 250px" />
              </div>
            </div>
            <div class="col col-lg-2">
              <nav class="navbar__one-nav navbar__one-secnav">
                <g-link exact to="/">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                  <p>Cart</p>
                </g-link>
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

    <!-- Layout Two -->
    <section class="navbar__two d-none d-lg-block" v-if="navLayout === 2">
      <!-- <a-affix :offsetTop="0"> -->
        <div class="container">
          <div class="row">
            <div class="col col-lg-4">
              <nav class="navbar__two-nav">
                <g-link exact to="/">Shop</g-link>
                <g-link exact to="/">Collection</g-link>
                <g-link exact to="/">Sale</g-link>
              </nav>
            </div>
            <div class="col col-lg-3">
              <g-link>
                <img :src="navLogo" alt="Store Logo">
              </g-link>
            </div>
            <div class="col col-lg-3">
              <div class="navbar__two-search">
                <a-input-search placeholder="Search store..." style="width: 250px" />
              </div>
            </div>
            <div class="col col-lg-2">
              <nav class="navbar__two-nav navbar__two-secnav">
                <g-link exact to="/">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                  <p>Cart</p>
                </g-link>
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
                <g-link exact to="/">Shop</g-link>
                <g-link exact to="/">Collection</g-link>
                <g-link exact to="/">Sale</g-link>
              </nav>
            </div>
            <div class="col col-lg-3">
              <g-link>
                <img :src="navLogo" alt="Store Logo">
              </g-link>
            </div>
            <div class="col col-lg-2">
              <nav class="navbar__three-nav navbar__three-secnav">
                <g-link exact to="/">
                  <img src="@/assets/img/nav/cart.svg" width="20" alt="Cart">
                  <p>Cart</p>
                </g-link>
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
      <ClientOnly>
        <Slide>
          <a id="home" href="#">
            <span>Home</span>
          </a>
        </Slide>
      </ClientOnly>
    </section>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    components: {
      Slide: () => 
        import ('vue-burger-menu')
        .then(m => m.Slide)
        .catch()
    },

    data: () => ({

    }),

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
      ])
    }
  }
</script>

<style lang="scss">
  @import './_index';
</style>