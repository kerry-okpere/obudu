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
      catid: "default"
    },
    name: "",
    description: ""
  }
});

export const getters = {
  // computed properties
  getProductsCategory(state, getters) {
    return state.products;
  }
};

export const actions = {
  fetchProducts() {
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
    state.products.category.catid = catId;
  }
};
