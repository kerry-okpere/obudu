import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import Router from 'vue-router';

import store from '@/store/store';
import router from '@/router';

import Default from '@/router/layouts/Default.vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

import SocialSharing from 'vue-social-sharing';

import "@storefront-ui/vue/styles.scss";
import '@/assets/styles/global.scss';

// Firebase
import '@/firebase/config';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(Antd);
Vue.use(VueMaterial);
Vue.use(SocialSharing);

Vue.component('Layout', Default);
Vue.component('v-icon', Icon);

new Vue({
  store,
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
