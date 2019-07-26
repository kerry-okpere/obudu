<template>
  <div class="container is-widescreen is-fullhd">
    <no-ssr>
    <carousel :per-page="1" :mouseDrag="true">
      <slide>
        <div class="home-hero">
        <span>
          <h1 class="home-hero__title">Enjoy up to 40% OFF this summer!</h1>
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
