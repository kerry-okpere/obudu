<template>
  <div class="container">
    <HomeSlider />
    <SectionTitle />
    <HomeProducts />
    <HomeFeatures />
    

  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import SectionTitle from '../components/SectionTitle/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeFeatures from '../components/HomeFeatures/index';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    SectionTitle,
    HomeProducts,
    HomeFeatures

  }
}

</script>

<style>

@import './index.scss';

</style>