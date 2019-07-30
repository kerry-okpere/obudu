<template>
  <div class="container">
    <HomeSlider />
    <HomeProductCategory />
    <HomeProducts />
    <div class="section-2"></div>
  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeProductCategory from '../components/HomeProductCategory';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeProducts,
    HomeProductCategory

  }
}

</script>

<style>

@import './index.scss';

</style>