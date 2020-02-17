<template>
  <a-collapse accordion>
    <a-collapse-panel header="Information" key="1" :showArrow="arrow">
      <TInfo />
    </a-collapse-panel>
    <a-collapse-panel header="Logo" key="2" :showArrow="arrow">
      <TLogo />
    </a-collapse-panel>
    <a-collapse-panel header="Fonts" key="3" :showArrow="arrow">
      <TFonts />
    </a-collapse-panel>
    <a-collapse-panel header="Colors" key="4" :showArrow="arrow">
      <TColors />
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import TInfo from './components/TInfo.vue';
import TLogo from './components/TLogo.vue';
import TFonts from './components/TFonts.vue';
import TColors from './components/TColors.vue';

export default {
  data: () => ({
    arrow: false
  }),
  components: {
    TInfo,
    TLogo,
    TFonts,
    TColors
  }
}
</script>

<style lang="scss">
@import '../../_index';
</style>