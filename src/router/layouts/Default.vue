<template>
  <section class="layout__default">
    <NavHeader />
        <slot />
    <NavFooter />
  </section>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavFooter from '@/components/NavFooter'

export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
</style>