import Vue from 'vue';
import App from './App.vue';

// Vuex
import Vuex from 'vuex';
import Router from 'vue-router';
import store from '@/store/store';
import router from '@/router';

// Default Layout
import Default from '@/router/layouts/Default.vue';

// Libraries 
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import VueCarousel from 'vue-carousel';
import SocialSharing from 'vue-social-sharing';
import ProductZoomer from 'vue-product-zoomer';
import VueTour from 'vue-tour';
require('vue-tour/dist/vue-tour.css');

// Styles
import "@storefront-ui/vue/styles.scss";
import '@/assets/styles/global.scss';

// Styled Components
import SButton from './components/AStyled/SButton.js';
Vue.component('s-button', SButton);

// Firebase
import '@/firebase/config';

Vue.use(Antd);
Vue.use(Vuex);
Vue.use(Router);
Vue.use(VueTour);
Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(ProductZoomer);
Vue.use(SocialSharing);
Vue.component('v-icon', Icon);
Vue.component('Layout', Default);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
