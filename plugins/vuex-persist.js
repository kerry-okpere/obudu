import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
    window.onNuxtReady(() => {
      new VuexPersistence({
        reducer: (state) => ({ 
          cart: state.cart,
          currency: state.currency
        }),
      }).plugin(store);
    });
  }