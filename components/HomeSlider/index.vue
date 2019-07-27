<template>
  <div class="container is-widescreen home-hero__container">
    <no-ssr>
    <carousel :per-page="1" :mouseDrag="true" :autoplay="true" :pagination-enabled="false">
      <slide>
        <div class="home-hero">
        <span>
          <h1 class="home-hero__title">Enjoy up to 40% OFF <br>this summer!</h1>
          <br>
          <span class="home-hero__button">
          <a class="button is-white is-outlined">SHOP NOW</a>
          </span>
        </span>
        </div>
        </slide>
        <slide>
        <div class="home-hero home-hero__2">
        <span>
          <h1 class="home-hero__title">Enjoy up to 40% OFF <br>this summer!</h1>
          <br>
          <span class="home-hero__button">
          <a class="button is-white is-outlined">SHOP NOW</a>
          </span>
        </span>
        </div>
        </slide>
    </carousel>
    </no-ssr>
  </div>
</template>

<script>
export default {
  name: 'HomeSlider'
};
</script>
<style>
@import "./_index.scss";
</style>
