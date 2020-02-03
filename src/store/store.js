import Vue from 'vue';
import Vuex from 'vuex';

import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
    key: process.env.VUE_APP_STORENAME,
    storage: window.localStorage,
    reducer: (state) => ({
        styles: state.styles,
        data: state.data,
        cart: state.products.cart
    })
});

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import products from './products/products';

Vue.use(Vuex);

const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state,
    modules: {
        products
    },
    plugins: [vuexLocal.plugin]
});

export default store;