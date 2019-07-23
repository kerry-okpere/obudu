<template>
  <div class="conatiner">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="~assets/img/logo.png" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
              <nuxt-link to="/">Home</nuxt-link>
          </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
              <nuxt-link to="/collections">Collections</nuxt-link>
          </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">Shoes</a>
              <a class="navbar-item">Bags</a>
              <a class="navbar-item">Clothes</a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          
          
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
@import "./_index.scss";
</style>
