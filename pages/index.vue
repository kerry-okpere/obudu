<template>
  <div>
    <HomeSlider />
    <HomeProductCategory />
    <SectionTitleAlt sectionTitleAlt="New Products" />
    <HomeProducts />

  </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider/index';
import HomeProducts from '../components/HomeProducts/index';
import HomeProductCategory from '../components/HomeProductCategory/index';

import SectionTitleAlt from '../components/SectionTitleAlt/index';

export default {
  name: 'Home',
  components: {
    HomeSlider,
    HomeProducts,
    HomeProductCategory,
    SectionTitleAlt
    
  }
}

</script>

<style>

@import './index.scss';

</style>