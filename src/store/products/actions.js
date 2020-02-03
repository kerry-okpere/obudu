import axios from "axios";
import { STORENAME, API_URL, STORE_ID } from "./../../config"
// import products from "./products";
const storefront$http = axios.create({
  baseURL: API_URL+"/storefront",
  headers: {
    "Authorization": STORE_ID
  }
});

let fetchProductUrl = `${API_URL}/storefront`;
let dummy_store = `${STORENAME}`;


const actions = {

  async fetchStoreStyles({ state, commit }) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.get(`${API_URL}/${STORE_ID}/styles`).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject("Unable to fetch styles");
      }
    });
  },

  async saveStoreStyles({ state, commit }, {payload}) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.post(`${API_URL}/${STORE_ID}/styles`, {...payload}).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject("Unable to save styles");
      }
    });
  },

  async fetchHomeProducts({ state, commit }) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.get('/products').catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
        commit("setProducts", response.data);
      } else {
        reject("Unable to fetch products");
      }
    });
  },

  async fetchSingleProducts({state, commit}, {prodId}) {
    return new Promise (async (resolve, reject) => {
      let reqUrl = `/${prodId}`;
      let response = await storefront$http.get(reqUrl).catch(err => console.log(err));

      if(response.status == 200) {
        resolve(response.data);
        commit("setProduct", response.data);
      }else {
        reject("Unable to fetch product");
      }
    })
  },

  addProductToCart({commit, state}, product){
    let selectedProd = {...product};
    let totalProdQty = selectedProd.quantity;
    // let totalProdQty = product.quantity; product.quantity = 0;

    let prodbj = state.singleProduct
    selectedProd.image  = prodbj.images[0].url;


    if(totalProdQty > 0){

      let cartItem = !state.cart ? undefined : state.cart.find(item => item.index == selectedProd.index);
      
      if(cartItem == undefined){
        let priceSplit = selectedProd.price.split("NGN"); selectedProd.price = parseFloat(priceSplit[1].trim().replace(",", ""));
        selectedProd.quantity = selectedProd.selectedQuantity; delete selectedProd.selectedQuantity;
        commit("PUSH_PROUDCT_TO_CART", selectedProd)
      } else {
        let cartIndex = state.cart.map( (item,indx) => {
          if(item.index == cartItem.index){
            return indx;
          } 
        });
        cartIndex = cartIndex[0];
        cartItem.quantity += selectedProd.selectedQuantity;
        commit("INCREMENT_CART_ITEM_QUANTITY", {cartItem, cartIndex})
      }

    }

  },

  deleteCartItem({state, commit}, cartIndex){
    let newCart = state.cart.find( (item, index) => index === cartIndex );
    if(newCart){
      commit('UPDATE_CART_ON_ITEM_DELETE', cartIndex);
    }
  }



};

export default actions;