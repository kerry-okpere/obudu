<template>
  <section class="layout__default">
    <NavBar />
        <slot />
    <NavFooter />
  </section>
</template>

<script>
// import NavHeader from '~/components/NavHeader'
import NavBar from '@/components/NavBar'
import NavFooter from '@/components/NavFooter'

export default {
  components: {
    NavBar,
    NavFooter
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
</style>