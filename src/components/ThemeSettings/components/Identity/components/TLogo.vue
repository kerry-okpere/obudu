<template>
  <div class="settings__logo">
    <div class="settings__modal-item">
      <p>Logo</p>
      <img :src="siteLogo" :alt="storeName" width="100" class="d-block pb-2">
      <a-button type="primary" size="small" id="upload_widget" @click="upLogo">
        Change Logo
      </a-button>
    </div>
    <div class="settings__modal-item">
      <p>Logo Size</p>
      <a-slider @change="setSiteLogoSize" :min="10" :max="300" :defaultValue="siteLogoSize" />
    </div>
    <div class="settings__modal-item">
      <p>Favicon</p>
      <img :src="siteFavicon" :alt="storeName" width="30" class="d-block pb-2">
      <a-button type="primary" size="small" id="upload_widget" @click="upFavicon">
        Change Favicon
      </a-button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters ([
      'storeName',
      'siteLogo',
      'siteLogoAlt',
      'siteLogoSize',
      'siteFavicon'
    ])
  },
  methods: {
    setLogoSize(value) {
      this.$store.commit('setLogoSize', value);
    },
    
    //Cloudinary Upload Widgets
    upLogo() {
      eventBus.$emit('upLogo');
    },

  }
}
</script>
