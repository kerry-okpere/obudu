<template>
  <section class="layout__checkout">
    <NavHeader />
    <div class="content">
      <slot />
    </div>
    <NavFooter />
  </section>
</template>

<script>
import NavHeader from '~/components/NavHeader'
import NavFooter from '~/components/NavFooter'

export default {
  components: {
    NavHeader,
    NavFooter
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 100px;
}
</style>