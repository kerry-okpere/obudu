<template>
  <section class="layout__default">
    <NavHeaderFixed />
    <div class="content">
      <slot />
    </div>
    <NavCart />
    <NavLogin />
    <NavFooter />
  </section>
</template>

<script>
import NavHeaderFixed from '@/components/NavHeaderFixed'
import NavCart from '@/components/NavCart'
import NavLogin from '@/components/NavLogin'
import NavFooter from '@/components/NavFooter'

export default {
  components: {
    NavHeaderFixed,
    NavCart,
    NavLogin,
    NavFooter
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100px;
}
</style>