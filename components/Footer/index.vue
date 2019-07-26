<template>
  <div class="container">
    <footer class="footer">
      <div class="columns">
        <div class="column">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="~assets/img/logo.png" />
            </a>
          </div>
        </div>
        <div class="column">
          <div class="footer__menu">
            <a class="footer__item">
              Products
              <!-- <nuxt-link to="/">Home</nuxt-link> -->
            </a>

            <a class="footer__item">
              Accessories
              <!-- <nuxt-link to="/">Home</nuxt-link> -->
            </a>
          </div>
        </div>
        <div class="column">
          <p class="copyright">Copyright 2019, MercurieMart.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
@import "./_index.scss";
</style>
