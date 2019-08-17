<template>
 <section class="hero">
  <div class="hero-head">
    <nav class="navbar is-spaced is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/img/logo.png" />
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navigation" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Products
            <!-- <nuxt-link to="/">Home</nuxt-link> -->
          </a>

          <a class="navbar-item">
            Accessories
            <!-- <nuxt-link to="/">Home</nuxt-link> -->
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Collections
              <!-- <nuxt-link to="/collections">Collections</nuxt-link> -->
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Shoes</a>
              <a class="navbar-item">Bags</a>
              <a class="navbar-item">Clothes</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            <span>Search</span>
            <span class="icon"><img src="../../assets/img/search.svg" /></span>
            <!-- <nuxt-link to="/">Home</nuxt-link> -->
          </a>
          <a class="navbar-item">
            <span>Cart</span>
            <span class="icon"><img src="../../assets/img/cart.svg" /></span>
            <!-- <nuxt-link to="/">Home</nuxt-link> -->
          </a>
        </div>
      </div>
    </nav>
  </div>

<div class="hero-body">
      <div class="container">
    <no-ssr>
    <carousel :per-page="1" :autoplay="false" :mouseDrag="true">
      <slide><img src="../../assets/img/slider/image-1.jpg" />Slide</slide>
      <slide><img src="../../assets/img/slider/image-2.jpg" />Slide</slide>
    </carousel>
    </no-ssr>
  </div>
</div>
 </section>
</template>

<script>
export default {
  name: 'NavBarWithSlider'
};
</script>

<style lang="scss" scoped>
@import "./_index.scss";
</style>
