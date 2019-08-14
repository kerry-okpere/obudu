<template>
  <div>
    <HomeSlider />
    <HomeProductCategory />
    <SectionTitle sectionTitle="New Arrivals" sectionSubtitle="Shop our latest products" />
    <HomeProducts />

  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeProductCategory from '../components/HomeProductCategory/index';

import SectionTitle from '../components/SectionTitle/index';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeProducts,
    HomeProductCategory,
    SectionTitle


  }
}

</script>

<style>

@import './index.scss';

</style>