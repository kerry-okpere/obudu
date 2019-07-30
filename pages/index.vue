<template>
  <div class="container">
    <HomeSlider />
    <HomeProductCategory />
    <HomeProducts />
    <div class="section-2"></div>
    <TrialBadge />
  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeProductCategory from '../components/HomeProductCategory/index';
import TrialBadge from '../components/TrialBadge/index';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeProducts,
    HomeProductCategory,
    TrialBadge

  }
}

</script>

<style>

@import './index.scss';

</style>