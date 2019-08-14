import Vue from 'vue';
import Vuex from 'vuex';

import { GET_SINGLE_PRODUCTS } from "../queries/productQueries";

Vue.use(Vuex);

export const state = () => ({
  //data
  products: {
    id: "",
    image: "",
    price: {
      currency: "",
      amount: ""
    },
    category: {
      id: "default"
    },
    name: "",
    description: ""
  }
});

export const getters = {
  // computed properties
  getProductsCategory(state, getters) {
    return new Promise ((resolve, reject) => {
      resolve(state.products);
      reject("Unable to get products");
    }) 
  },
  
};

export const actions = {
  fetchProducts(context) {
    //make the grapql call
  }
};

export const mutations = {
  setProductsName(state, productPayload) {
    //update products name
    state.products.name = productPayload;
  },

  setProductsId(state, productId) {
    state.products.id = productId;
  },

  setProductsCatId(state, catId) {
    state.products.category.id = catId;
  }
};
