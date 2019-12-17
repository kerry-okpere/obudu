import Vue from 'vue';
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import products from './products/products';

Vue.use(Vuex);

const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    actions,
    getters,
    mutations,
    state,
    modules: {
        products
    }
});

export default store;