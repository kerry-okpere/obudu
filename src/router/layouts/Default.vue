<template>
  <section class="layout__default">
    <NavHeader />
    <div class="content">
      <slot />
    </div>
    <NavCart />
    <NavLogin />
    <NavFooter />
  </section>
</template>

<script>
import NavHeader from '@/components/NavHeader'
import NavCart from '@/components/NavCart'
import NavLogin from '@/components/NavLogin'
import NavFooter from '@/components/NavFooter'

export default {
  components: {
    NavHeader,
    NavCart,
    NavLogin,
    NavFooter
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 60px;
}
</style>