import axios from "axios";
import { STORENAME, API_URL, STORE_ID } from "../../config";

const storefront$http = axios.create({
  baseURL: API_URL+"/storefront",
  headers: {
    "Authorization": STORE_ID
  }
});


const actions = {

  async uploadStoreImages({ state, commit }, {payload}) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.post(`${API_URL}/merchants/uploads`, {...payload}).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject("Unable to post image");
      }
    });
  },

  async fetchStoreMetadata({ state, commit }) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.get(`${API_URL}/${STORE_ID}/metadata`).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject("Unable to fetch metadata");
      }
    });
  },

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

  async fetchStoreData({ state, commit }) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.get(`${API_URL}/${STORE_ID}/data`).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject("Unable to fetch data");
      }
    });
  },

  async saveStoreData({ state, commit }, {payload}) {
    return new Promise(async (resolve, reject) => {      
      let response = await storefront$http.post(`${API_URL}/${STORE_ID}/data`, {...payload}).catch(err => console.log(err));
      if (response.status == 200) {
        resolve(response.data);
      } else {
        reject("Unable to save data");
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




};

export default actions;