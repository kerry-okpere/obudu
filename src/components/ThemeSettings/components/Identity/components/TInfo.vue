<template>
  <div class="settings__details">
    <div class="settings__modal-item">
      <p>Store Name</p>
      <a-input @change="setStoreName($event.target.value)" :placeholder="storeName" />
    </div>
    <div class="settings__modal-item">
      <p>Site Title</p>
      <a-input @change="setSiteTitle($event.target.value)" :placeholder="siteTitle" />
    </div>
    <div class="settings__modal-item">
      <p>Site Tagline</p>
      <a-input @change="setSiteTagline($event.target.value)" :placeholder="siteTagline" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters ([
      'storeName',
      'siteTitle',
      'siteTagline'
    ])
  },
  methods: {
    ...mapMutations ([
      'setStoreName',
      'setSiteTitle',
      'setSiteTagline'
    ])
  }
}
</script>
