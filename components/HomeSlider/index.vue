<template>
  <div class="container">
    <no-ssr>
    <carousel :per-page="1" :autoplay="true" :mouseDrag="true">
      <slide><img src="../../assets/img/slider/image-1.jpg" />Slide</slide>
      <slide><img src="../../assets/img/slider/image-2.jpg" />Slide</slide>
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
