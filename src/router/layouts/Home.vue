<template>
  <section class="layout__home" :class="[this.$store.state.styles.priFont, this.$store.state.styles.secFont]">
    <NavHeader />
        <HomeHero />
        <HomeCollections />
        <HomeProductsTitle />
        <HomeProducts />
            <slot />
        <HomeNewsletter />
        <BacktoTop />
    <NavFooter />
  </section>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'
import HomeHero from '@/components/HomeHero'
import HomeCollections from '@/components/HomeCollections'
import HomeProductsTitle from '@/components/HomeProductsTitle'
import HomeProducts from '@/components/HomeProducts'
import HomeNewsletter from '@/components/HomeNewsletter'
import BacktoTop from '@/components/BacktoTop'

export default {
  components: {
    NavHeader,
    NavFooter,
    HomeHero,
    HomeCollections,
    HomeProductsTitle,
    HomeProducts,
    HomeNewsletter,
    BacktoTop
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';

</style>