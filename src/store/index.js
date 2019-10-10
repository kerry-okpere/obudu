import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

import csc from 'country-state-city'

const cartPersist = new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({ 
        cart: state.cart,
        currency: state.currency
    }),
});


import { CREATE_TOKEN_MUTATION } from '../queries/authTokenQueries';
import { 
  GET_PRODUCTS, GET_SIMILAR_PRODUCTS,
  GET_STORE_CURRENCY, GET_PRODUCTS_URL
} from "../queries/productQueries";

import { 
  getPaymentTokenQuery, completeCheckoutMutation, 
  updateCheckoutShippingOptionsMutation, updateCheckoutBillingAddressMutation,
  paymentMethodCreateMutation
} from "../queries/coreCheckoutQueries";

import config from '@/config';

import {productDetailsQuery} from "../queries/productQueries_v2";


import {
  createCheckoutMutation
} from "../queries/checkoutQueries";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
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
    adminToken: {},
    storeUrls: [],
    checkoutId: {},
    countries: []
  },


  getters: {
    // computed properties
    getProductsCategory(state) {
      return new Promise ((resolve, reject) => {
        resolve(state.similarProducts);
        reject("Unable to get products");
      })
    },

    getHomeProducts(state) {
      return state.homeProducts[0]
      // console.log(check);
    },

    getCountries(state){
      return state.countries;
    },

    getSingleProduct(state) {
      return state.singleProduct
    },

    getCategoryId(state){
      return state.categoryId
    },

    getSimilarProducts(state) {
      return state.similarProducts[0]
    },

    getSingleProductsBreadcrumbs(state){
      return state.productsBreadCrumb;
    },

    getCartQuantity(state){
      let cart = state.cart;
      let totalCartCount = cart.reduce((totalCount, item) => totalCount += item.quantity, 0);
      return totalCartCount;
      // return cart.length;
    },

    getCartItems(state){
      return state.cart;
    },
    
    getStoreCurrency(state){
      return state.currency;
    },

    getCartTotal(state){
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

    cartTotalPrice(state){
      let price = state.cart.reduce( (total, product) => total + product.price * product.quantity, 0);
      // where 80.1 is default delivery option for post office
      if(price == 0) return price; else return price += 80.1;
    },

    getAdminAuthToken(state) {
      return state.adminToken;
    },

    getCheckoutId(state) {
      return state.checkoutId;
    },
    
    getEnvVariables(state){
      return state.enVariables;
    },

    getStoreUrls(state){
      return state.storeUrls;
    }
    
  },

  actions:{
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
      } 
    },

    async incrementCartQuantity({state, commit}, {productId, quantity}) {
        let findCartItem = state.cart.find( (item, index) => item.prodId === productId);
        let cartIndex = state.cart.indexOf(findCartItem)
        findCartItem.newQty = quantity;
        findCartItem.cartIndex = cartIndex;
        if(findCartItem.quantity < quantity){
          commit("increaseCartQtyMutation", findCartItem)
        } else if(findCartItem.quantity > quantity) {
          commit("decreaseCartQtyMutation", findCartItem)
        }
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
        // console.log(response);
        if(response.data.checkoutCreate.checkout){
          const {checkout} = response.data.checkoutCreate; 
          commit('checkoutPhase', response.data);
          commit('setCheckoutId', checkout.id);
          resolve(response.data);  
        } else {
          reject("Unable to update checkoutInput mutation")
        }
  
      })
    },
  
    async createAdminAuthMutation({state, commit}, {apollo, checkoutInput}){
      return new Promise ( async (resolve, reject) => {
        let response = await  apollo.mutate({
          mutation: CREATE_TOKEN_MUTATION,
          variables: { "email": config.admin.email  , "password": config.admin.password }
        });  
  
        commit('adminAuthToken', response.data);
        resolve();
        reject("Unable to update admin auth token mutation");
      })
  
    },
  
    async getPaymentToken({state, commit}, {apollo, gateway}) {
      return new Promise ( async (resolve, reject) => {
        let response = await apollo.query({
          query: getPaymentTokenQuery,
          variables: {"gateway": gateway}
        });
  
        resolve(response.data);
        reject("Unable to get payment query")
      })
    },
  
    async createPayment({state, commit}, {apollo, checkoutId, input}) {
      return new Promise ( async (resolve, reject) => {
        let response = await apollo.mutate({
          mutation: paymentMethodCreateMutation,
          variables: {
            checkoutId,
            input
          }
        })
  
        resolve(response);
        reject ("Unable to initialise payment")
      })
    },  
  
    async completePayment({state, commit}, {apollo, checkoutInput}){
      return new Promise( async (resolve, reject) => {
        let response = await apollo.mutate({
          mutation: completeCheckoutMutation,
          variables: {"checkoutId": checkoutInput}
        });
  
        if(response.data.checkoutComplete.errors.length < 1){
          resolve(response.data);
          commit("emptyCart");
        } else {
          reject("Unable to complete payement query");
        }
      })
    },
  
    async updateShipping({state, commit}, {apollo, checkoutInput, shippingId}){
      return new Promise( async (resolve, reject) => {
        let response = await apollo.mutate({
          mutation: updateCheckoutShippingOptionsMutation,
          variables: {"checkoutId": checkoutInput, "shippingMethodId": shippingId}
        });
  
        resolve(response.data);
        reject("unable to update shipping options")
      })
    },
  
    async updateBilling({state, commit}, {apollo, billingAddress, checkoutId}){
      return new Promise( async (resolve, reject) => {
        let response = await apollo.mutate({
          mutation: updateCheckoutBillingAddressMutation,
          variables: {billingAddress, checkoutId}
        })
  
        resolve(response.data);
        reject("unable to update billing options");
      })
    },

    async fetchCountries({commit}){
      return new Promise( async (resolve, reject) => {
        let countries = csc.getAllCountries();
        commit("setCountriesMutation", countries);
        resolve();
        reject("Unable to fetch countries");
      })
    },

    async fetchStoreUrls(context, {apollo}){
      return new Promise(async (resolve, reject) => {
        let response = await apollo.query({
            query: GET_PRODUCTS_URL
        });
        let storeUrls = response.data.products.edges;
        // context.commit("storeUrls", storeUrls);
        resolve(storeUrls);
        reject("Unable to fetch store urls");
      })
  }

  },

  mutations:{
    
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
      let newDesc = JSON.parse(singleProd.descriptionJson);
      state.singleProduct = singleProd;
      state.singleProduct.descriptionJson = newDesc.blocks[0].text;
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

    increaseCartQtyMutation(state, newCartObj){
      const {cartIndex, quantity, newQty} = newCartObj;
      if(state.cart[cartIndex].quantity == newQty); else if(state.cart[cartIndex].quantity !== newQty){
        let qtyDif = newQty - quantity;
        if(qtyDif === 1){
          state.cart[cartIndex].quantity = newQty;
        }
      }
    },

    decreaseCartQtyMutation(state, newCartObj){
      const {cartIndex, quantity, newQty} = newCartObj;
      if(state.cart[cartIndex].quantity == newQty); else if(state.cart[cartIndex].quantity !== newQty){
        let qtyDif = newQty - quantity;
        if(qtyDif !== 1){
          state.cart[cartIndex].quantity = newQty;
        }
      }

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
    },

    storeUrls(state, storeUrlObj){
      state.storeUrls.push(storeUrlObj); 
    },

    setCheckoutId(state, checkoutId){
      state.checkoutId = checkoutId;
    },
    
    emptyCart(state){
      state.cart = [];
    },

    setCountriesMutation(state, countries){
      state.countries = countries;
    }

  },

  plugins: [cartPersist.plugin]


});


export default store;
