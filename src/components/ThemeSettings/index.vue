<template>
  <section class="settings">
    <div class="container">
      <section class="settings__intro">
        <StoreIntro />
      </section>
      <section class="settings__identity">
        <h1><v-icon name="paint-brush" class="mr-2" />Identity</h1>
        <StoreIdentity />
      </section>
      <section class="settings__layout">
        <h1><v-icon name="layer-group" class="mr-2" />Layout</h1>
        <StoreLayout />
      </section>
      <section class="settings__widgets">
        <h1><v-icon name="shapes" class="mr-2" />Widgets</h1>
        <StoreWidgets />
      </section>
      <section class="settings__utility">
        <h1><v-icon name="tools" class="mr-2" />Utility</h1>
        <StoreUtility />
      </section>
      <section class="settings__pages">
        <h1><v-icon name="scroll" class="mr-2" />Pages</h1>
        <StorePages />
      </section>
    </div>
  </section>
</template>

<script>
import { eventBus } from '@/eventBus.js';
import { mapGetters, mapMutations } from 'vuex';

import StoreIntro from './components/Intro/index.vue';
import StoreIdentity from './components/Identity/index.vue';
import StoreLayout from './components/Layout/index.vue';
import StoreWidgets from './components/Widgets/index.vue';
import StorePages from './components/Pages/index.vue';
import StoreUtility from './components/Utility/index.vue';
import cloudinary from './cloudinary.js';

export default {
  components: {
    StoreIntro,
    StoreIdentity,
    StoreLayout,
    StoreWidgets,
    StorePages,
    StoreUtility
  },
  computed: {
    styles(){
      return this.$store.state.styles
    },
    data(){
      return this.$store.state.data
    }
  },
  methods: {
    //Notification on Save
    openNotificationWithIcon(type) {
        this.$notification[type]({
        message: 'Success',
        description:
            'You have saved your storefront design successfully.',
        });
    },

    setStoreName(storename){
        this.$store.commit("updateStoreName", storename);
    }
  },
  mounted(){
  },
  watch: {
    styles: {
      deep: true,
      handler(newStyles) {
        this.$store.dispatch("products/saveStoreStyles", {
          payload: newStyles
        });
      }
    },
    data: {
      deep: true,
      handler(newData) {
        this.styles.data = newData
        this.$store.dispatch("products/saveStoreData", {
          payload: newData
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './_index';
</style>