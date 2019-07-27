<template>
  <div class="container">
    <HomeSlider />
    <SectionTitle />
    <HomeProducts />
    <HomeFeatures />
    <HomeMap />
    

  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import SectionTitle from '../components/SectionTitle/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeFeatures from '../components/HomeFeatures/index';
import HomeMap from '../components/HomeMap/index';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    SectionTitle,
    HomeProducts,
    HomeFeatures,
    HomeMap

  }
}

</script>

<style>

@import './index.scss';

</style>