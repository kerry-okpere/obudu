import axios from "axios";
// const fetch = require("isomorphic-fetch");
// require("isomorphic-fetch");

let fetchProductUrl = `${process.env.VUE_APP_API_URL}/storefront`;
let dummy_store = `${process.env.VUE_APP_STORENAME}`;

// if(dummy_store == undefined){
//     // Attempt to get Config JSON
//     fetch("./config.json")
//       .then(response => response.json())
//       .then(json => {
//         console.log("The Config contents are: ", json);
//         fetchProductUrl = `${json["GRIDSOME_API_URL"]}/storefront/fetch`;
//         dummy_store = json["GRIDSOME_STORENAME"];
//       })
//       .catch(err => console.log("Unable to locate config file", err));

// }


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