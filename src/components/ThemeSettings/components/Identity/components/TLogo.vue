<template>
  <div class="settings__logo">
    <div class="settings__modal-item">
      <p>Logo</p>
      <img :src="siteLogo" :alt="storeName" width="100" class="d-block pb-2">

      <!-- Upload Button -->
        <a-upload name="file" :multiple="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="uploadLogo">
          <a-button class="upload" size="small">
            <a-icon type="upload"/>Click to Upload
          </a-button>
        </a-upload>
    </div>
    <div class="settings__modal-item">
      <p>Logo Size</p>
      <a-slider @change="setSiteLogoSize" :min="10" :max="300" :defaultValue="siteLogoSize" />
    </div>
    <div class="settings__modal-item">
      <p>Favicon</p>
      <img :src="siteFavicon" :alt="storeName" width="30" class="d-block pb-2">

        <!-- Upload Button -->
        <a-upload name="file" :multiple="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="uploadFavicon">
          <a-button class="upload" size="small">
            <a-icon type="upload"/>Click to Upload
          </a-button>
        </a-upload>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus.js';
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    headers: {
      authorization: 'authorization-text',
    },
  }),
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
    uploadLogo(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    uploadFavicon(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
}
</script>
