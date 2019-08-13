import Vuex from 'vuex';

import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{ //data
        products: {
            id: '',
            image: '',  
            price:{
                currency: '',
                amount: ''
            },
            category: {
                catid: 'default'
            },
            name: '',
            description: ''
        }
    },

    getters: { // computed properties
        getProductsCategory(state, getters) {
            return state.products;
        }

    },

    actions: {
        fetchProducts () {
            //make the grapql call
        }
    },

    mutations: {
        setProductsName(state, productPayload) {
            //update products name
            state.products.name = productPayload
        },

        setProductsId(state, productId){
            state.products.id = productId;
        },

        setProductsCatId(state, catId){
            state.products.category.catid = catId;
        }
    }
})
