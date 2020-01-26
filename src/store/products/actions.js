import axios from "axios";
import { STORENAME, API_URL, STORE_ID } from "./../../config"
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
        console.log(response.data);
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
  }
};

export default actions;