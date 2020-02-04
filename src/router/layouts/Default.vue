<template>
  <section class="layout__default" :class="[this.$store.state.styles.priFont, this.$store.state.styles.secFont]">
    <NavHeaderFixed />
    <div class="content">
      <slot />
    </div>
    <NavCart />
    <NavLogin />
    <BacktoTop />
    <NavFooter />
  </section>
</template>

<script>
import NavHeaderFixed from '@/components/NavHeaderFixed'
import NavCart from '@/components/NavCart'
import NavLogin from '@/components/NavLogin'
import NavFooter from '@/components/NavFooter'
import BacktoTop from '@/components/BacktoTop'

export default {
  components: {
    NavHeaderFixed,
    NavCart,
    NavLogin,
    NavFooter,
    BacktoTop
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
}
@include media-breakpoint-down(md) {
  .content {
    margin-top: 5px;
  }
}
</style>