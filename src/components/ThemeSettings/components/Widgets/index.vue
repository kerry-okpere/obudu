<template>
  <a-collapse accordion>
    <a-collapse-panel header="Products" key="1" :showArrow="arrow">
      <TProducts />
    </a-collapse-panel>
    <a-collapse-panel header="Collections" key="2" :showArrow="arrow">
      <TCollection />
    </a-collapse-panel>
    <a-collapse-panel header="Newsletter" key="3" :showArrow="arrow">
      <TNewsletter />
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import TProducts from './components/TProducts.vue';
import TCollection from './components/TCollection.vue';
import TNewsletter from './components/TNewsletter.vue';

export default {
  data: () => ({
    arrow: false
  }),
  components: {
    TProducts,
    TCollection,
    TNewsletter
  }
}
</script>

<style lang="scss">
@import '../../_index';
</style>