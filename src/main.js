import Vue from 'vue'
import App from './App.vue';

import Vuex from 'vuex'
import Router from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import SocialSharing from 'vue-social-sharing';
import VueNumberInput from '@chenfengyuan/vue-number-input';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

import Default from "./router/layouts/default.vue";

import router from './router'
import store from './store'

import "@storefront-ui/vue/styles.scss";
import './assets/styles/global.scss';

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import resetHeaderClient from "./apolloHelpers"

const apolloProvider = new VueApollo({
  clients: {
    resetHeaderClient
  },
  defaultClient: apolloClient
})

Vue.use(BootstrapVue);
Vue.use(Antd);
Vue.use(SocialSharing);
Vue.use(VueNumberInput);
Vue.component('v-icon', Icon);
Vue.use(Vuex);
Vue.use(Router);

Vue.component('defaultLayout', Default);


Vue.config.productionTip = false

const vm  = new Vue({
  store,
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')

export default vm;