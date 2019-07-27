<template>
  <div class="container footer-container">
    <div class="columns">
      <div class="column">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="~assets/img/logo.png" />
          </a>
        </div>
      </div>
      <div class="column">
        <span>
        <div class="footer-container__nav">
          <a class="navbar-item footer__nav-item">
            About
          </a>
          <a class="navbar-item footer__nav-item">
            Payment & Delivery
          </a>
          <a class="navbar-item footer__nav-item">
            FAQ's
          </a>
          <a class="navbar-item footer__nav-item">
            Privacy Policy
          </a>
        </div>
        </span>
      </div>
      <div class="column footer-container__logos">
        <span>
          <img class="footer__logos" src="~assets/img/footer/flutterwave.svg" alt="Flutterwave">
          <img class="footer__logos" src="~assets/img/footer/quickteller.svg" alt="Quickteller">
        </span>
        <span class="footer__copyright">
          <p>Copyright 2019, MercurieMart. All rights reserved.</p>
        </span>
      </div>
    </div>
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
