import Vue from 'vue';
import Vuex from 'vuex';

import { GET_SINGLE_PRODUCTS, GET_PRODUCTS, GET_SIMILAR_PRODUCTS } from "../queries/productQueries";

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
  },

  homeProducts: [],
  singleProduct: "",
  similarProducts: [],
  categoryId: '',
});

export const getters = {
  // computed properties
  getProductsCategory(state, getters) {
    return new Promise ((resolve, reject) => {
      resolve(state.similarProducts);
      reject("Unable to get products");
    })
  },

  getHomeProducts(state, getters) {
    return state.homeProducts[0]
  },

  getSingleProduct(state, getters) {
    return state.singleProduct
  },

  getCategoryId(state, getters){
    return state.categoryId
  },

  getSimilarProducts(state, getters) {
    return state.similarProducts[0]
  }

};

export const actions = {
  fetchProducts(context, {apollo}) {
    return new Promise(async (resolve, reject) => {
      let response = await apollo.query({
          query: GET_PRODUCTS
      });
      let prods = response.data.products.edges;
      context.commit('setHomeProducts', prods);
      context.commit('setSimilarProducts', prods);      
      resolve();
      reject("Unable to fetch products")
    });
  },

  fetchSingleProducts(context, {apollo, product_id}){
    return new Promise(async (resolve, reject) => {
      let response = await apollo.query({
        query: GET_SINGLE_PRODUCTS,
        variables: { "id": product_id }
      });
      let single_prod = response.data.product;
      context.commit('setSingleProducts', single_prod);
      context.commit('setCategoryId', single_prod.category.id);
      resolve();
      reject("Unable to fetch product")
    })
  },

  async fetchSimilarProducts(context, {apollo, category_id }){
    return new Promise(async (resolve, reject) => {
      let response = await apollo.query({
        query: GET_SIMILAR_PRODUCTS,
        variables: { "id": category_id }
      })
      let data = response.data.category.products.edges
      data.shift();
      context.commit('setSimilarProducts', data);      
      resolve();
      reject("Unable to fetch similar products");

    })
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
  },

  setHomeProducts(state, homeProds){
    // state.homeProducts = homeProds;
    state.homeProducts.push(homeProds);
  },

  setSimilarProducts(state, similarProds){
    state.similarProducts.push(similarProds);
  },

  setSingleProducts(state, singleProd){
    state.singleProduct = singleProd;
  },

  setCategoryId(state, cat_id){
    state.categoryId = cat_id;
  }
};
