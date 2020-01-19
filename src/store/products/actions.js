import axios from "axios";
import { STORENAME, API_URL } from "./../../config"

let fetchProductUrl = `${API_URL}/storefront`;
let dummy_store = `${STORENAME}`;

const actions = {
  async fetchHomeProducts({ state, commit }) {
    return new Promise(async (resolve, reject) => {
      let reqUrl = `${fetchProductUrl}/fetch/${dummy_store}`;
      
      let response = await axios.get(reqUrl).catch(err => console.log(err));
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
      let reqUrl = `${fetchProductUrl}/${prodId}/${dummy_store}`;
      let response = await axios.get(reqUrl).catch(err => console.log(err));

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