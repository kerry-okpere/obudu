import Vue from 'vue'
import App from './App.vue';
import Vuex from 'vuex'
import Router from 'vue-router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

var SocialSharing = require('vue-social-sharing');
 
Vue.use(SocialSharing);

import Default from "./router/layouts/default.vue";

import router from './router'

import store from './store'
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(Router)

Vue.component('defaultLayout', Default);



 
Vue.config.productionTip = false

new Vue({
  store,
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
