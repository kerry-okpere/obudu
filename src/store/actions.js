import csc from 'country-state-city'
import axios from "axios";

import { STORENAME, API_URL, STORE_ID } from "../config"
const storefront$http = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": STORE_ID
    }
});

const actions = {
    addProductToCart({ commit, state }, product) {
        let selectedProd = { ...product };
        let totalProdQty = selectedProd.quantity;

        // let totalProdQty = product.quantity; product.quantity = 0;

        let prodbj = state.products.singleProduct
        selectedProd.image = prodbj.images[0].url;


        if (totalProdQty > 0) {

            let cartItem = !state.cart ? undefined : state.cart.find(item => item.index == selectedProd.index);

            if (cartItem == undefined) {
                let priceSplit = selectedProd.price.split("NGN"); selectedProd.price = parseFloat(priceSplit[1].trim().replace(",", ""));
                selectedProd.quantity = selectedProd.selectedQuantity; delete selectedProd.selectedQuantity;
                console.log(selectedProd);
                commit("PUSH_PROUDCT_TO_CART", selectedProd)
            } else {
                let cartIndex = state.cart.map((item, indx) => {
                    if (item.index == cartItem.index) {
                        return indx;
                    }
                });
                cartIndex = cartIndex[0];
                cartItem.quantity += selectedProd.selectedQuantity;
                commit("INCREMENT_CART_ITEM_QUANTITY", { cartItem, cartIndex })
            }

        }

    },

    deleteCartItem({ state, commit }, cartIndex) {
        let newCart = state.cart.find((item, index) => index === cartIndex);
        if (newCart) {
            commit('UPDATE_CART_ON_ITEM_DELETE', cartIndex);
        }
    },

    async fetchCountries({ commit }) {
        return new Promise(async (resolve, reject) => {
            let countries = csc.getAllCountries();
            commit("SET_COUNTRIES_MUTATION", countries);
            resolve();
            reject("Unable to fetch countries");
        })
    },

    async createOrder({ commit, state }, orderObj) {
        return new Promise(async (resolve, reject) => {
            let response = await storefront$http.post("/orders/create", orderObj).catch(err => console.log(err));
            if (response.status == 200) {
                resolve(response.data);
            } else {
                reject("Unable to fetch product");
            }
        })
    },

    async fetchMerchantSettings({commit, state}) {
        return new Promise(async (resolve, reject) => {
            let response = await storefront$http.get("/merchants/settings").catch(err => console.log(err));
            if(response.status == 200) {
                resolve(response.data);
            } else {
                reject ("Unable to fetch merchant settings");
            }
        })
    },

    emptyCart({commit}){
        commit("EMPTY_CART");
    }

}

export default actions;