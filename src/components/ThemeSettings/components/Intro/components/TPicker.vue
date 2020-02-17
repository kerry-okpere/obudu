<template>
  <section class="themes">
    <div class="row text-center">
      <div class="col-6 col-xl-4">
        <a-card hoverable :style="custom">
          <img src="@/assets/img/preview/sample-1.jpg" slot="cover"/>
          <a-card-meta title="Jupiter">
            <template slot="description">Minimalist theme for your store</template>
          </a-card-meta>
          <a-popconfirm placement="top" okText="Yes" cancelText="No" @confirm="setThemeJupiter">
            <template slot="title">
              <p>Changing your theme will override <br />all your settings, are you sure you <br />want to continue?</p>
            </template>
              <a-button v-if="themeName == 'Jupiter'" :loading="loading && (themeName == 'Jupiter')" class="disabled" block>Current Theme</a-button>
              <a-button v-else class="custom" block>Select</a-button>
          </a-popconfirm>
        </a-card>
      </div>
      <div class="col-6 col-xl-4">
        <a-card hoverable :style="custom">
          <img src="@/assets/img/preview/sample-2.jpg" slot="cover"/>
          <a-card-meta title="Venus">
            <template slot="description">Modern theme for your store</template>
          </a-card-meta>
          <a-popconfirm placement="top" okText="Yes" cancelText="No" @confirm="setThemeVenus">
            <template slot="title">
              <p>Changing your theme will override <br />all your settings, are you sure you <br />want to continue?</p>
            </template>
              <a-button v-if="themeName == 'Venus'" :loading="loading && (themeName == 'Venus')" class="disabled" block>Current Theme</a-button>
              <a-button v-else class="custom" block>Select</a-button>
          </a-popconfirm>
        </a-card>
      </div>
      <div class="col-6 col-xl-4">
        <a-card hoverable :style="custom">
          <img src="@/assets/img/preview/sample-3.jpg" slot="cover"/>
          <a-card-meta title="Mars">
            <template slot="description">Clean theme for your store</template>
          </a-card-meta>
          <a-popconfirm placement="top" okText="Yes" cancelText="No" @confirm="setThemeMars">
            <template slot="title">
              <p>Changing your theme will override <br />all your settings, are you sure you <br />want to continue?</p>
            </template>
              <a-button v-if="themeName == 'Mars'" :loading="loading && (themeName == 'Mars')" class="disabled" block>Current Theme</a-button>
              <a-button v-else class="custom" block>Select</a-button>
          </a-popconfirm>
        </a-card>
      </div>
    </div>
  </section>
</template>

<script>
import { eventBus } from '@/eventBus.js';
import { mapGetters } from 'vuex';
import themeJupiter from '@/store/themes/jupiter.js';
import themeVenus from '@/store/themes/venus.js';
import themeMars from '@/store/themes/mars.js';

export default {
  data: () => ({
    custom: 'width: 250px',
    loading: false,
  }),
  computed: {
    ...mapGetters([
      'themeName'
    ])
  },
  methods: {
    setThemeJupiter() {
      this.loading = true;
      eventBus.$emit('themeJupiter');
      setTimeout(() => {
        this.$message.success('Theme successfully changed!');
        this.loading = false;
      }, 1000);
    },
    setThemeVenus() {
      this.loading = true;
      eventBus.$emit('themeVenus');
      setTimeout(() => {
        this.$message.success('Theme successfully changed!');
        this.loading = false;
      }, 1000);
    },
    setThemeMars() {
      this.loading = true;
      eventBus.$emit('themeMars');
      setTimeout(() => {
        this.$message.success('Theme successfully changed!');
        this.loading = false;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.themes {
  button {
    margin: 20px 0 0;
    &.custom {
      color: #fff;
      @include btn-solid-color($black);
      &:hover {
          @include btn-outline-color($black);
          background-color: #fff;
      }
    }
    &.disabled {
    color: #d4d4d4!important;
    background-color: #f5f5f5!important;
    border-color: #d9d9d9!important;
    text-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    cursor: not-allowed;
    }
  }
}
</style>