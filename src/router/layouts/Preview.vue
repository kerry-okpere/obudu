<template>
  <section class="layout__home" :class="[priFont, secFont]">
    <section class="storefront">
      <NavHeader />
        <HomeHero />
        <HomeCollections />
        <HomeProductsTitle />
        <HomeProducts />
            <slot />
        <HomeNewsletter />
        <NavCart />
        <NavLogin />
        <BacktoTop />
      <NavFooter />
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import NavHeader from '@/components/NavHeader';
import NavCart from '@/components/NavCart';
import NavLogin from '@/components/NavLogin';
import NavFooter from '@/components/NavFooter';
import HomeHero from '@/components/HomeHero';
import HomeCollections from '@/components/HomeCollections';
import HomeProductsTitle from '@/components/HomeProductsTitle';
import HomeProducts from '@/components/HomeProducts';
import HomeNewsletter from '@/components/HomeNewsletter';
import BacktoTop from '@/components/BacktoTop'
import UnderConstruction from '@/components/UnderConstruction';

export default {
  components: {
    NavHeader,
    NavCart,
    NavLogin,
    NavFooter,
    HomeHero,
    HomeCollections,
    HomeProductsTitle,
    HomeProducts,
    HomeNewsletter,
    BacktoTop,
    UnderConstruction
  },
  computed: {
    ...mapGetters([
      'priFont',
      'secFont',
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>