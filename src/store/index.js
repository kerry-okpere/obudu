import Vue from 'vue';
import Vuex from 'vuex';

import { CREATE_TOKEN_MUTATION } from '../queries/authTokenQueries';
import config from '@/config';
import { 
  GET_SINGLE_PRODUCTS, GET_PRODUCTS, GET_SIMILAR_PRODUCTS,
  GET_STORE_CURRENCY
} from "../queries/productQueries";

import {productDetailsQuery} from "../queries/productQueries_v2";


import {
  createCheckoutMutation
} from "../queries/checkoutQueries";

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
    description: "",
  },
  enVariables: {},
  homeProducts: [],
  singleProduct: "",
  similarProducts: [],
  productsBreadCrumb: [],
  categoryId: '',
  cart:[],
  currency: "",
  checkoutCreate: {},
  adminToken: {}
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
    // console.log(check);
  },

  getSingleProduct(state, getters) {
    return state.singleProduct
  },

  getCategoryId(state, getters){
    return state.categoryId
  },

  getSimilarProducts(state, getters) {
    return state.similarProducts[0]
  },

  getSingleProductsBreadcrumbs(state, getters){
    return state.productsBreadCrumb;
  },

  getCartQuantity(state, getters){
    let cart = state.cart;
    return cart.length;
  },

  getCartItems(state, getters){
    return state.cart;
  },
  
  getStoreCurrency(state, gettters){
    return state.currency;
  },

  getCartTotal(state, getters){
    let cartItem = state.cart;
    let tempPrice = 0;
    let multiPrice = 0;
    for(let i=0; i<cartItem.length; i++){
      if(cartItem[i].quantity == 1){
        tempPrice += cartItem[i].price;
      } else {
        multiPrice = cartItem[i].quantity * cartItem[i].price;
        tempPrice += multiPrice;
      }
    }
    return tempPrice;
  },

  cartTotalPrice(state, getters){
    return state.cart.reduce( (total, product) => total + product.price * product.quantity, 0);
  },

  getAdminAuthToken(state, getters) {
    return state.adminToken;
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
        query: productDetailsQuery,
        variables: { "id": product_id }
      });
      let single_prod = response.data.product;
      context.commit('setSingleProducts', single_prod);
      context.commit('setCategoryId', single_prod.category.id);
      context.commit('setSingleProductsBreadcrumb', single_prod);
      resolve();
      reject("Unable to fetch product")
    })
  },

  // fetchSingleProducts(context, {apollo, product_id}){
  //   return new Promise(async (resolve, reject) => {
  //     let response = await apollo.query({
  //       query: GET_SINGLE_PRODUCTS,
  //       variables: { "id": product_id }
  //     });
  //     let single_prod = response.data.product;
  //     context.commit('setSingleProducts', single_prod);
  //     context.commit('setCategoryId', single_prod.category.id);
  //     context.commit('setSingleProductsBreadcrumb', single_prod);
  //     resolve();
  //     reject("Unable to fetch product")
  //   })
  // },

  fetchStoreCurrency(context, {apollo}){
    return new Promise( async (resolve, reject) => {
      let response = await apollo.query({
        query: GET_STORE_CURRENCY,
      });
      let currency = response.data.shop.defaultCurrency;
      context.commit('setStoreCurrency', currency);
      resolve();
      reject("Unable to fetch currency");
    });
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
  },

  async addProductsToCart(context, product){
    let productInventory = product.variants.find(item => item.name === product.selected);
    let newProduct = {
      "prodId": product.id,
      "variantId": productInventory.id,
      "imgUrl": product.thumbnail.url,
      "name": product.selected,
      "prodName": product.name,
      "price": product.price.amount,
      "quantity": "",
      "currency": product.price.currency
    };

    if(productInventory.stockQuantity > 0) {
      let cartItem = context.state.cart.find(item => (item.name === product.selected) && (item.prodId === product.id));
      if(!cartItem > 0){
        context.commit('pushProductToCart', newProduct);
      } else{
        context.commit('incrementItemQuantity', cartItem);
      }
      // context.commit('decrementProductInventory', cartItem);
      //decrement product inventory by writing a mutation
    } 
  },

  async incrementCartQuantity({state}, productId) {
      let findCartItem = state.cart.find(item => item.prodId === productId);
  },

  async deleteCartItem({state, commit}, cartIndex){
    let newCart = state.cart.find( (item, index) => index === cartIndex );
    console.log(newCart);
    if(newCart){
      commit('updateCartItemOnDelete', cartIndex);
    }
  },

  async createCart({state, commit}, {apollo, checkoutInput}){
    return new Promise (async (resolve, reject ) => {
      let response = await apollo.mutate({
        mutation: createCheckoutMutation,
        variables: { "checkoutInput": checkoutInput }
      });

      if(response){
        commmit('checkoutPhase', response.data);
        resolve();  
      } else {
        reject("Unable to update checkoutInput mutation")
      }

    })
  },

  async createAdminAuthMutation({state, commit}, {apollo, checkoutInput}){
    return new Promise ( async (resolve, reject) => {
      let response = await  apollo.mutate({
        mutation: CREATE_TOKEN_MUTATION,
        variables: { "email": config.admin.email ? process.env.ADMIN_EMAIL : "admin@mercurie.ng" , "password": process.env.ADMIN_PASSWORD ? process.env.ADMIN_EMAIL : "admin" }
      });  

      commit('adminAuthToken', response.data);
      resolve();
      reject("Unable to update admin auth token mutation");
    })

  }

};

export const mutations = {
  
  setEnvironmentVariables(state, envVariables){
    state.enVariables = envVariables;
  },

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
  },

  setSingleProductsBreadcrumb(state, prodDetails){
    state.productsBreadCrumb[0] = {
      text: "Home",
      href: "/"
    };
    state.productsBreadCrumb[1] = {
      text: prodDetails.category.name,
      href: `/${prodDetails.category.name}/`
    };

    state.productsBreadCrumb[2] = {
      text: prodDetails.name,
      active: true 
    }
  },

  pushProductToCart(state, product){
    product["quantity"] = 1;
    state.cart.push(product);
  },

  incrementItemQuantity(state, cartItem){
    cartItem.quantity++;
  },

  decrementProductInventory(state, product){
    product.inventory--;
  },

  updateCartItemOnDelete(state, cartId){
    state.cart = state.cart.filter( (item, index) => index !== cartId );
  },

  setStoreCurrency(state, curr){
    state.currency = curr;
  },

  checkoutPhase(state, checkoutCreate){
    state.checkoutCreate = checkoutCreate;
  },

  adminAuthToken(state, tokenObj){
    state.adminToken = tokenObj.tokenCreate.token;
  }

};
