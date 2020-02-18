<template>
  <section class="settings">
    <div class="container">
      <section class="settings__intro">
        <StoreIntro />
      </section>
      <section class="settings__identity">
        <h1>Store Identity</h1>
        <StoreIdentity />
      </section>
      <section class="settings__layout">
        <h1>Store Layout</h1>
        <StoreLayout />
      </section>
      <section class="settings__widgets">
        <h1>Store Widgets</h1>
        <StoreWidgets />
      </section>
      <section class="settings__pages">
        <h1>Additional Pages</h1>
        <StorePages />
      </section>
      <section class="settings__social">
        <h1>Social Media</h1>
        <StoreSocial />
      </section>
      <!-- <section class="settings__dashboard">
        <a-button size="large" block  @click.prevent="gotoDashboard()"><a-icon type="dashboard" />Return to Dashboard</a-button>
      </section> -->
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
import StoreSocial from './components/Social/index.vue';
import cloudinary from './cloudinary.js';

export default {
  components: {
    StoreIntro,
    StoreIdentity,
    StoreLayout,
    StoreWidgets,
    StorePages,
    StoreSocial
  },
  methods: {
    gotoDashboard(){
        console.log("Jooo")
        window.location.href = `https://${window.location.host}/dashboard`;
    },

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
    // console.log(this.styles)
  },
  watch: {
    styles: {
      deep: true,
      handler(newStyles) {
        this.$store.dispatch("products/saveStoreStyles", {
          payload: newStyles
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './_index';
</style>