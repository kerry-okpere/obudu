<template>
  <a-collapse accordion>
    <a-collapse-panel header="Socials" key="1" :showArrow="arrow">
      <TSocials />
    </a-collapse-panel>
    <a-collapse-panel header="Maps" key="2" :showArrow="arrow">
      <TMaps />
    </a-collapse-panel>
    <a-collapse-panel header="CSS/JS" key="3" :showArrow="arrow">
      <TCustom />
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import TSocials from './components/TSocials.vue';
import TMaps from './components/TMaps.vue';
import TCustom from './components/TCustom.vue';

export default {
  data: () => ({
    arrow: false
  }),
  components: {
    TSocials,
    TMaps,
    TCustom
  }
}
</script>

<style lang="scss">
@import '../../_index';
</style>