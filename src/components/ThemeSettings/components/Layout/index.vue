<template>
  <a-collapse accordion>
    <a-collapse-panel header="Menu" key="1" :showArrow="arrow">
      <TMenu />
    </a-collapse-panel>
    <a-collapse-panel header="Hero" key="2" :showArrow="arrow">
      <THero />
    </a-collapse-panel>
    <a-collapse-panel header="Footer" key="3" :showArrow="arrow">
      <TFooter />
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import TMenu from './components/TMenu.vue';
import THero from './components/THero.vue';
import TFooter from './components/TFooter.vue';

export default {
  data: () => ({
    arrow: false
  }),
  components: {
    TMenu,
    THero,
    TFooter
  }
}
</script>

<style lang="scss">
@import '../../_index';
</style>