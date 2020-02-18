<template>
  <div class="settings__intro">
    <div class="settings__intro-return">
      <v-icon name="arrow-circle-left" /><span><a-button type="link" @click.prevent="gotoDashboard()">Return to Dashboard</a-button></span>
    </div>
    <div class="row">
      <div class="col-10">
        <h3>You are customizing</h3>
      </div>
      <div class="col-2">
        <a-popover trigger="click" placement="topRight">
          <template slot="content">
            <p class="pt-2">Our design tool allows you change the <br />look & feel of your store and to preview  <br />changes before publishing them.</p>
            <a href="https://help.mercuriemart.com" target="_blank">Learn more</a>
          </template>
          <a-icon type="question-circle" class="pt-1" />
        </a-popover>
      </div>
    </div>
    <h1>{{storeName}}</h1>
    <a-divider />
    <div class="row">
      <div class="col-8">
        <p class="mb-1">Active theme</p>
        <h3>{{themeName}}</h3>
      </div>
      <div class="col-4">
      <a-button @click="changeThemes" class="float-right">Change</a-button>
      <a-modal title="Select Your Theme" v-model="showThemes" @ok="saveThemes" okText="Save" :footer="null" width="1000px">
        <ThemePicker />
      </a-modal>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-7">
        <p class="pt-1">Under Construction</p>
      </div>
      <div class="col-5">
        <a-switch checkedChildren="Enabled" unCheckedChildren="Disabled"
          :defaultChecked="underConstruction" @change="setUnderConstruction" class="ml-1 mt-0 float-right" />
      </div>
    </div>
    <a-divider />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ThemePicker from './components/TPicker.vue';

export default {
  data: () => ({
    showThemes: false,
  }),
  components: {
    ThemePicker
  },
  computed: {
    ...mapGetters([
      'storeName',
      'themeName',
      'underConstruction',
    ])
  },
  methods: {
    gotoDashboard(){
      console.log("Redirecting to Dashboard")
      window.location.href = `https://${window.location.host}/dashboard`;
    },
    changeThemes() {
      this.showThemes = true;
    },
    saveThemes() {
      this.loading = true;
      setTimeout(() => {
          this.showThemes = false;
          this.loading = false;
      }, 1000);
      this.$message.success('Theme successfully changed!');
    },
    themesCancel(e) {
      this.showThemes = false;
    },
    setUnderConstruction(checked) {
      this.$store.commit('setUnderConstruction', checked);
      if (checked === true) {
          this.$message.success('Under construction enabled!');
      } else {
          this.$message.success('Under construction disabled!');
      }
    },
  }
}
</script>

<style lang="scss">
@import '../../_index';

</style>